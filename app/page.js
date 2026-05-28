"use client";

import Image from "next/image";
import {
  MapPin,
  Globe2,
  Award,
  ShieldCheck,
  Building2,
  Home,
  TrendingUp,
  Quote,
  Instagram,
  ArrowDown,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import useReveal from "@/components/useReveal";

/* === DATOS EDITABLES ===================================================== */
const STATS = [
  { value: "+20", label: "Años en el mercado" },
  { value: "Lujo", label: "Propiedades premium" },
  { value: "3", label: "Mercados internacionales" }, // [INSERTAR: ajustar si aplica]
];

const ZONAS = [
  {
    icon: Building2,
    titulo: "Equipetrol",
    desc: "Departamentos y penthouses de alta gama en el corazón financiero y social de la ciudad.",
  },
  {
    icon: Home,
    titulo: "Urubó",
    desc: "Casas y residencias exclusivas en condominios privados, rodeadas de naturaleza y seguridad.",
  },
  {
    icon: TrendingUp,
    titulo: "Inversión",
    desc: "Oportunidades comerciales y de renta con proyección real de valorización en Santa Cruz.",
  },
];

const DIFERENCIADORES = [
  {
    icon: Award,
    titulo: "Dos décadas de trayectoria",
    desc: "Más de 20 años cerrando operaciones en el segmento premium. No improviso: conozco cada zona, cada precio y cada movimiento del mercado cruceño.",
  },
  {
    icon: Globe2,
    titulo: "Mirada internacional",
    desc: "Acompaño a inversionistas locales y del exterior. Entiendo lo que busca quien compra desde afuera y elimino la distancia como obstáculo.",
  },
  {
    icon: ShieldCheck,
    titulo: "Respaldo RE/MAX",
    desc: "La red inmobiliaria más grande del mundo detrás de cada operación, con la atención personal y discreta que un cliente de lujo espera.",
  },
];

// [INSERTAR: reemplazar por testimonios reales de clientes de Ingrid]
const TESTIMONIOS = [
  {
    texto:
      "[INSERTAR: testimonio real con resultado concreto — ej. 'Ingrid me ayudó a invertir desde Miami en un penthouse en Equipetrol. Todo el proceso fue remoto, transparente y sin un solo dolor de cabeza.']",
    nombre: "[INSERTAR: Nombre]",
    detalle: "[INSERTAR: Ciudad / tipo de cliente]",
  },
  {
    texto:
      "[INSERTAR: testimonio real — ej. 'Vendí mi casa en el Urubó en 6 semanas y al precio que quería. Su red de contactos hace la diferencia.']",
    nombre: "[INSERTAR: Nombre]",
    detalle: "[INSERTAR: Ciudad / tipo de cliente]",
  },
];

const FAQS = [
  {
    q: "Vivo fuera de Bolivia, ¿puedo invertir igual?",
    a: "Sí. Gran parte de mis clientes invierte desde el exterior. Coordino todo de forma remota: tours virtuales, documentación, due diligence y firma, con total transparencia en cada paso.",
  },
  {
    q: "¿Solo manejás propiedades de lujo?",
    a: "Me especializo en el segmento premium y de inversión: propiedades de gama media-alta hacia arriba en las zonas más cotizadas de Santa Cruz. Es el mercado que mejor conozco y donde realmente aporto valor.",
  },
  {
    q: "¿Qué pasa después de dejar mis datos?",
    a: "Te contacto personalmente por WhatsApp en menos de 24 horas para entender qué buscás y mostrarte opciones reales que encajen con tu objetivo. Sin compromiso ni presión.",
  },
  {
    q: "Quiero vender mi propiedad, ¿me ayudás?",
    a: "Por supuesto. Hago una valuación profesional, preparo la propiedad para destacar y la presento a mi red de compradores e inversionistas calificados.",
  },
];
/* ======================================================================== */

export default function Page() {
  useReveal();

  return (
    <main className="overflow-x-hidden">
      {/* ===================== NAV ===================== */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between">
        <Image
          src="/img/firma-gold.png"
          alt="Ingrid Cuellar"
          width={150}
          height={42}
          className="h-9 w-auto"
          priority
        />
        <a
          href="#contacto"
          className="hidden sm:inline-block border border-gold/50 text-cream hover:bg-gold hover:text-navy transition-colors duration-300 px-6 py-2.5 text-xs tracking-luxe uppercase"
        >
          Contactar
        </a>
      </nav>

      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen bg-navy grain flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/ingrid-hero.jpg"
            alt="Ingrid Cuellar, asesora inmobiliaria de lujo en Santa Cruz"
            fill
            priority
            className="object-cover object-center opacity-90 md:opacity-100 md:object-[75%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 md:via-navy/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/40" />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-3xl pt-24 pb-16">
          <p className="kicker text-gold mb-6 animate-fade-in">
            Santa Cruz de la Sierra · Bolivia
          </p>
          <h1 className="font-serif text-cream text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-6 animate-fade-up">
            El lujo no se busca.
            <br />
            <span className="italic text-gold-light">Se encuentra bien asesorado.</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Propiedades exclusivas en Equipetrol y el Urubó para quienes saben
            que una buena inversión empieza por la persona correcta.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-navy font-medium px-9 py-4 tracking-wide transition-all duration-300"
            >
              Quiero asesoría personalizada
            </a>
          </div>
        </div>

        <a
          href="#valor"
          aria-label="Ver más"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold/70 hover:text-gold transition-colors"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </a>
      </section>

      {/* ===================== STATS BAR ===================== */}
      <section id="valor" className="bg-navy-deep border-y border-gold/15">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-3 gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="font-serif text-gold text-4xl md:text-5xl font-light mb-1">
                {s.value}
              </div>
              <div className="kicker text-cream/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== PAIN / EMPATÍA ===================== */}
      <section className="bg-cream py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="kicker text-gold-dark mb-6 reveal">Lo entiendo</p>
          <h2 className="font-serif text-navy text-3xl md:text-5xl font-light leading-tight mb-8 reveal">
            Comprar en Santa Cruz sin alguien de confianza es jugar a ciegas.
          </h2>
          <div className="gold-rule w-24 mx-auto mb-8 reveal" />
          <p className="text-navy/70 text-lg font-light leading-relaxed reveal">
            Precios inflados, propiedades que no son lo que prometen, papeleo
            interminable y la sensación de que nadie juega para tu lado. Si
            invertís desde afuera, todo se multiplica. Mereces a alguien que
            conozca el terreno de verdad — y que ponga su reputación detrás de
            cada recomendación.
          </p>
        </div>
      </section>

      {/* ===================== ZONAS / QUÉ OFRECE ===================== */}
      <section className="bg-cream-warm py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="kicker text-gold-dark mb-4 reveal">Dónde trabajo</p>
            <h2 className="font-serif text-navy text-3xl md:text-5xl font-light reveal">
              Las zonas más codiciadas de la ciudad
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ZONAS.map((z, i) => {
              const Icon = z.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-10 border-t-2 border-gold reveal group hover:shadow-xl transition-shadow duration-500"
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <Icon className="w-8 h-8 text-gold mb-6" strokeWidth={1.3} />
                  <h3 className="font-serif text-navy text-2xl mb-3">{z.titulo}</h3>
                  <p className="text-navy/60 font-light leading-relaxed">{z.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== SOBRE INGRID ===================== */}
      <section className="bg-navy grain py-24 md:py-32 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal order-2 md:order-1">
            <p className="kicker text-gold mb-6">La asesora</p>
            <h2 className="font-serif text-cream text-4xl md:text-5xl font-light leading-tight mb-8">
              Conocé a Ingrid Cuellar
            </h2>
            <div className="gold-rule w-20 mb-8" />
            <div className="space-y-5 text-cream/75 font-light text-lg leading-relaxed">
              <p>
                Más de dos décadas en el mercado inmobiliario cruceño me
                enseñaron que vender propiedades es, en realidad, abrir puertas
                a una nueva etapa de vida.
              </p>
              <p>
                Mujer viajera, conectada y con un entorno sólido en la ciudad,
                me especializo en inversiones de lujo, propiedades comerciales y
                clientes internacionales. Cada operación la trato con la
                discreción y el cuidado que merece.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <Image
                src="/img/remax-globo.png"
                alt="RE/MAX"
                width={48}
                height={48}
                className="h-11 w-auto"
              />
              <a
                href="https://instagram.com/ingridcuellarremax"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" />
                @ingridcuellarremax
              </a>
            </div>
          </div>

          <div className="reveal order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/30 z-0" />
              <Image
                src="/img/ingrid-retrato.jpg"
                alt="Retrato de Ingrid Cuellar"
                width={600}
                height={600}
                className="relative z-10 w-full object-cover grayscale-[15%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DIFERENCIADORES ===================== */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="kicker text-gold-dark mb-4 reveal">Por qué Ingrid</p>
            <h2 className="font-serif text-navy text-3xl md:text-5xl font-light reveal">
              Lo que me diferencia
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {DIFERENCIADORES.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} className="reveal text-center md:text-left" style={{ transitionDelay: `${i * 0.12}s` }}>
                  <div className="inline-flex items-center justify-center w-14 h-14 border border-gold rounded-full mb-6">
                    <Icon className="w-6 h-6 text-gold-dark" strokeWidth={1.4} />
                  </div>
                  <h3 className="font-serif text-navy text-2xl mb-3">{d.titulo}</h3>
                  <p className="text-navy/60 font-light leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CÓMO TRABAJAMOS (3 PASOS) ===================== */}
      <section className="bg-cream-warm py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="kicker text-gold-dark mb-4 reveal">Simple y sin fricción</p>
            <h2 className="font-serif text-navy text-3xl md:text-5xl font-light reveal">
              Cómo trabajamos juntos
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: "01", t: "Conversamos", d: "Dejás tus datos y te escribo por WhatsApp para entender exactamente qué buscás." },
              { n: "02", t: "Seleccionamos", d: "Te presento opciones reales y filtradas que encajan con tu objetivo y presupuesto." },
              { n: "03", t: "Concretamos", d: "Te acompaño en cada paso hasta la firma, con respaldo legal y total transparencia." },
            ].map((p, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="font-serif text-gold text-6xl font-light mb-4">{p.n}</div>
                <h3 className="font-serif text-navy text-2xl mb-3">{p.t}</h3>
                <p className="text-navy/60 font-light leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIOS ===================== */}
      <section className="bg-navy grain py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="kicker text-gold mb-4 reveal">Confianza</p>
            <h2 className="font-serif text-cream text-3xl md:text-5xl font-light reveal">
              Clientes que ya dieron el paso
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIOS.map((t, i) => (
              <div key={i} className="bg-navy-soft border border-gold/15 p-10 reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <Quote className="w-8 h-8 text-gold/50 mb-5" />
                <p className="text-cream/85 font-light text-lg leading-relaxed italic mb-6">
                  {t.texto}
                </p>
                <div className="gold-rule w-12 mb-4" />
                <p className="text-gold font-serif text-lg">{t.nombre}</p>
                <p className="text-cream/40 kicker mt-1">{t.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="kicker text-gold-dark mb-4 reveal">Antes de escribirme</p>
            <h2 className="font-serif text-navy text-3xl md:text-5xl font-light reveal">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details key={i} className="group bg-white border border-navy/10 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <summary className="cursor-pointer list-none px-7 py-5 flex justify-between items-center font-serif text-navy text-xl">
                  {f.q}
                  <span className="text-gold text-2xl font-light transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-7 pb-6 text-navy/60 font-light leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL + FORM ===================== */}
      <section id="contacto" className="bg-navy-deep grain py-24 md:py-32 px-6 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="kicker text-gold mb-6">Dejá tus datos</p>
            <h2 className="font-serif text-cream text-4xl md:text-5xl font-light leading-tight mb-6">
              Tu próxima propiedad empieza con una conversación.
            </h2>
            <p className="text-cream/70 font-light text-lg leading-relaxed mb-8">
              Completá el formulario y te escribo personalmente por WhatsApp.
              Sin compromiso, sin presión — solo asesoría real de alguien que
              conoce el mercado.
            </p>
            <div className="flex items-center gap-3 text-cream/60 text-sm">
              <MapPin className="w-5 h-5 text-gold" />
              Equipetrol · Urubó · Santa Cruz de la Sierra
            </div>
          </div>

          <div className="reveal flex justify-center md:justify-end" style={{ transitionDelay: "0.15s" }}>
            <LeadForm id="lead-form" dark />
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-navy border-t border-gold/15 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/img/firma-gold.png"
            alt="Ingrid Cuellar"
            width={160}
            height={45}
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-6">
            <Image src="/img/remax-globo.png" alt="RE/MAX" width={36} height={36} className="h-9 w-auto" />
            <a
              href="https://instagram.com/ingridcuellarremax"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-cream/40 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Ingrid Cuellar · Agente Inmobiliario RE/MAX
          </p>
        </div>
      </footer>
    </main>
  );
}
