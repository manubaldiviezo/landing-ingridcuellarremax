"use client";

import { useState } from "react";
import { Loader2, ArrowRight } from "lucide-react";

/* =========================================================================
   CONFIGURACIÓN RÁPIDA — edita solo estas constantes
   ========================================================================= */
const WHATSAPP_NUMBER = "59100000000"; // [INSERTAR: número WhatsApp con código país, sin + ni espacios. Ej: 59171234567]

// [INSERTAR: endpoint de Go High Level cuando lo tengas]
// Pega aquí la URL del webhook/form de GHL. Si lo dejas vacío, el form
// igual valida y abre WhatsApp (no se pierde ningún lead manualmente).
const GHL_WEBHOOK_URL = "";
/* ========================================================================= */

const INTERESES = [
  "Comprar propiedad",
  "Invertir en Santa Cruz",
  "Vender mi propiedad",
  "Alquilar",
];

export default function LeadForm({ id = "contacto", dark = false }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    interes: INTERESES[0],
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.nombre.trim() || form.nombre.trim().length < 3)
      e.nombre = "Ingresá tu nombre completo";
    const tel = form.telefono.replace(/\s/g, "");
    if (!/^[+]?[\d]{7,15}$/.test(tel))
      e.telefono = "Ingresá un teléfono válido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // 1) Guardar el lead en Go High Level (si está configurado)
    if (GHL_WEBHOOK_URL) {
      try {
        await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: form.nombre,
            telefono: form.telefono,
            interes: form.interes,
            origen: "Landing Page",
            fecha: new Date().toISOString(),
          }),
        });
      } catch (err) {
        // No bloqueamos al usuario si el webhook falla
        console.error(err);
      }
    }

    // 2) Abrir WhatsApp con mensaje pre-cargado
    const msg = encodeURIComponent(
      `Hola Ingrid, soy ${form.nombre}. Me interesa: ${form.interes}. Mi teléfono es ${form.telefono}.`
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, "_blank");
    setLoading(false);
  };

  const labelColor = dark ? "text-cream/70" : "text-navy/60";
  const inputBase = dark
    ? "bg-navy-soft border-gold/20 text-cream placeholder-cream/30 focus:border-gold"
    : "bg-white border-navy/15 text-navy placeholder-navy/30 focus:border-gold";

  return (
    <form id={id} onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
      <div>
        <label className={`kicker block mb-2 ${labelColor}`}>Nombre completo</label>
        <input
          type="text"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          placeholder="Tu nombre"
          aria-label="Nombre completo"
          className={`w-full px-5 py-4 border outline-none transition-colors duration-300 font-sans text-[15px] ${inputBase}`}
        />
        {errors.nombre && (
          <p className="text-gold-dark text-xs mt-1.5">{errors.nombre}</p>
        )}
      </div>

      <div>
        <label className={`kicker block mb-2 ${labelColor}`}>Teléfono / WhatsApp</label>
        <input
          type="tel"
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          placeholder="+591 7XX XXX XX"
          aria-label="Teléfono o WhatsApp"
          className={`w-full px-5 py-4 border outline-none transition-colors duration-300 font-sans text-[15px] ${inputBase}`}
        />
        {errors.telefono && (
          <p className="text-gold-dark text-xs mt-1.5">{errors.telefono}</p>
        )}
      </div>

      <div>
        <label className={`kicker block mb-2 ${labelColor}`}>Estoy interesado en</label>
        <select
          value={form.interes}
          onChange={(e) => setForm({ ...form, interes: e.target.value })}
          aria-label="Interés principal"
          className={`w-full px-5 py-4 border outline-none transition-colors duration-300 font-sans text-[15px] cursor-pointer ${inputBase}`}
        >
          {INTERESES.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group w-full bg-gold hover:bg-gold-dark text-navy font-sans font-medium tracking-wide py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Hablar con Ingrid
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className={`text-[11px] text-center ${labelColor}`}>
        Respuesta personalizada en menos de 24 horas. Tus datos son confidenciales.
      </p>
    </form>
  );
}
