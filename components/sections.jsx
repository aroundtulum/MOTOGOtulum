/* eslint-disable @next/next/no-img-element */
import {
  WHATSAPP_PEDIDO,
  WHATSAPP_ALIADO,
  PHONE_DISPLAY,
  PHONE_HREF,
  aliados,
  faqs,
} from '@/lib/data';

const FB = 'var(--font-bricolage), sans-serif';
const FS = 'var(--font-space), sans-serif';

/* ===== HERO ===== */
export function Hero() {
  return (
    <header
      className="hero sec"
      style={{
        position: 'relative',
        padding: '80px 72px 90px',
        display: 'grid',
        gridTemplateColumns: '1.05fr .95fr',
        gap: '40px',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-140px',
          right: '-120px',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle,rgba(157,176,136,.2),transparent 70%)',
        }}
      />
      <div className="herocopy" style={{ position: 'relative', maxWidth: '560px' }}>
        <div
          className="badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            background: 'rgba(157,176,136,.16)',
            color: '#B7C7A6',
            fontWeight: 700,
            fontSize: '16px',
            padding: '10px 20px',
            borderRadius: '100px',
            letterSpacing: '.02em',
          }}
        >
          🛵 Envíos rápidos en Tulum
        </div>
        <h1
          className="h1"
          style={{
            fontFamily: FB,
            fontWeight: 800,
            fontSize: '92px',
            lineHeight: '.92',
            color: '#fff',
            letterSpacing: '-.045em',
            margin: '26px 0 0',
          }}
        >
          Todo Tulum,
          <br />a un clic.
        </h1>
        <p
          style={{
            fontSize: '23px',
            lineHeight: 1.5,
            color: 'rgba(255,255,255,.62)',
            margin: '26px 0 0',
          }}
        >
          Comida, súper, farmacia y cualquier mandado. Tú lo pides, nosotros lo
          llevamos volando (o en moto) hasta tu puerta.
        </p>
        <div
          className="btnrow"
          style={{ display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}
        >
          <a
            href={WHATSAPP_PEDIDO}
            style={{
              background: '#9DB088',
              color: '#0A211A',
              fontWeight: 800,
              fontSize: '19px',
              padding: '19px 34px',
              borderRadius: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            💬 Pedir por WhatsApp
          </a>
          <a
            href={PHONE_HREF}
            style={{
              border: '2px solid rgba(255,255,255,.22)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '19px',
              padding: '19px 34px',
              borderRadius: '16px',
            }}
          >
            {PHONE_DISPLAY}
          </a>
        </div>
        <div
          className="stats"
          style={{ display: 'flex', gap: '30px', marginTop: '44px', flexWrap: 'wrap' }}
        >
          {[
            ['10+', 'Aliados locales'],
            ['~25', 'Entrega promedio', 'min'],
            ['7', 'De la semana', 'días'],
          ].map(([num, label, unit]) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: FB,
                  fontWeight: 800,
                  fontSize: '40px',
                  color: '#9DB088',
                }}
              >
                {num}
                {unit && <span style={{ fontSize: '24px' }}>{unit}</span>}
              </div>
              <div style={{ color: 'rgba(255,255,255,.5)', fontSize: '16px' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mockup del teléfono — aquí irá la mascota "Ron" más adelante */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '440px',
            height: '440px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle,rgba(157,176,136,.22),transparent 68%)',
          }}
        />
        <div
          className="heroph"
          style={{
            position: 'relative',
            width: '360px',
            height: '730px',
            borderRadius: '52px',
            background: '#0A211A',
            padding: '12px',
            boxShadow: '0 50px 90px -30px rgba(0,0,0,.6)',
            border: '1px solid rgba(157,176,136,.2)',
          }}
        >
          <div
            style={{
              height: '100%',
              borderRadius: '42px',
              overflow: 'hidden',
              background: '#0C271E',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 28px 0',
                fontWeight: 700,
                fontSize: '16px',
                color: '#fff',
              }}
            >
              9:41<span>5G</span>
            </div>
            <div style={{ padding: '18px 28px 0' }}>
              <div
                style={{
                  color: '#9DB088',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                }}
              >
                Hola 👋
              </div>
              <div
                style={{
                  fontFamily: FB,
                  fontWeight: 800,
                  fontSize: '30px',
                  color: '#fff',
                  marginTop: '4px',
                }}
              >
                ¿Qué se te
                <br />
                antoja hoy?
              </div>
            </div>
            <div
              style={{
                padding: '22px 28px 0',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
              }}
            >
              {[
                ['🍔', 'Comida', true],
                ['🛒', 'Súper', false],
                ['💊', 'Farmacia', false],
                ['📦', 'Mandados', true],
              ].map(([emoji, label, dark]) => (
                <div
                  key={label}
                  style={{
                    height: '104px',
                    borderRadius: '20px',
                    background: dark
                      ? 'linear-gradient(150deg,#7C9068,#556546)'
                      : '#F2ECDE',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '14px',
                  }}
                >
                  <span style={{ fontSize: '34px' }}>{emoji}</span>
                  <span
                    style={{
                      color: dark ? '#fff' : '#0A211A',
                      fontWeight: 700,
                      fontSize: '17px',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_PEDIDO}
              style={{
                position: 'absolute',
                left: '28px',
                right: '28px',
                bottom: '28px',
                background: '#9DB088',
                color: '#0A211A',
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '20px',
                padding: '18px',
                borderRadius: '16px',
              }}
            >
              Hacer pedido
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ===== TRUST STRIP ===== */
export function TrustStrip() {
  const logos = [
    ['/assets/logos/tacospapi-t.png', 'Tacos Papi', '38px', true],
    ['/assets/logos/gusto-cut-t.png', 'Gusto', '34px', false],
    ['/assets/logos/beacheladas-t.png', 'Beacheladas', '40px', true],
    ['/assets/logos/nimai-t.png', 'Nimai', '36px', true],
    ['/assets/logos/ginkgo-t.png', 'Sushi Lab', '34px', false],
  ];
  return (
    <div
      className="sec"
      style={{
        background: '#08190f',
        padding: '24px 72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
      }}
    >
      <span
        style={{
          color: 'rgba(255,255,255,.4)',
          fontWeight: 600,
          fontSize: '15px',
          letterSpacing: '.16em',
          textTransform: 'uppercase',
        }}
      >
        Restaurantes que ya nos eligen
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '38px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {logos.map(([src, alt, h, white]) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            style={{
              height: h,
              filter: white ? 'brightness(0) invert(1)' : 'none',
              opacity: white ? 0.7 : 0.85,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ===== CÓMO FUNCIONA ===== */
export function HowItWorks() {
  const steps = [
    ['1', 'Escríbenos', 'Mándanos tu pedido por WhatsApp o llámanos. Dinos qué necesitas y de dónde.'],
    ['2', 'Confirmamos', 'Te pasamos el total con el envío y el tiempo estimado. Tú apruebas y salimos.'],
    ['3', 'Recíbelo', 'Tu moto llega en minutos. Paga en efectivo o transferencia al recibir.'],
  ];
  return (
    <section id="como" className="sec" style={{ background: '#F2ECDE', padding: '96px 72px' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
        <div
          style={{
            color: '#6E8060',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '.3em',
            textTransform: 'uppercase',
          }}
        >
          Cómo funciona
        </div>
        <h2
          className="h2"
          style={{
            fontFamily: FB,
            fontWeight: 800,
            fontSize: '60px',
            lineHeight: 1,
            color: '#0A211A',
            letterSpacing: '-.03em',
            margin: '16px 0 0',
          }}
        >
          Pedir es así de fácil
        </h2>
      </div>
      <div
        className="grid3"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }}
      >
        {steps.map(([n, title, desc]) => (
          <div key={n} style={{ background: '#fff', borderRadius: '28px', padding: '40px 36px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '18px',
                background: '#0A211A',
                color: '#9DB088',
                fontFamily: FB,
                fontWeight: 800,
                fontSize: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {n}
            </div>
            <div
              style={{
                fontFamily: FB,
                fontWeight: 800,
                fontSize: '30px',
                color: '#0A211A',
                marginTop: '26px',
              }}
            >
              {title}
            </div>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.5,
                color: 'rgba(10,33,26,.62)',
                margin: '12px 0 0',
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== SERVICIOS ===== */
export function Services() {
  const cats = [
    ['🍔', 'Comida', 'De tus restaurantes favoritos', true],
    ['🛒', 'Súper', 'Despensa y lo del día', false],
    ['💊', 'Farmacia', 'Medicinas y urgencias', false],
    ['📦', 'Mandados', 'Envíos y encargos', true],
  ];
  return (
    <section id="categorias" className="sec" style={{ background: '#0A211A', padding: '96px 72px' }}>
      <div
        className="cathead"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '52px',
          gap: '24px',
        }}
      >
        <div>
          <div
            style={{
              color: '#9DB088',
              fontWeight: 700,
              fontSize: '17px',
              letterSpacing: '.3em',
              textTransform: 'uppercase',
            }}
          >
            Servicios
          </div>
          <h2
            className="h2"
            style={{
              fontFamily: FB,
              fontWeight: 800,
              fontSize: '60px',
              lineHeight: 1,
              color: '#fff',
              letterSpacing: '-.03em',
              margin: '16px 0 0',
            }}
          >
            Lo que necesites,
            <br />
            te lo llevamos
          </h2>
        </div>
        <p
          className="catright"
          style={{
            color: 'rgba(255,255,255,.55)',
            fontSize: '19px',
            maxWidth: '360px',
            textAlign: 'right',
          }}
        >
          Si lo venden en Tulum, te lo llevamos. Estos son los pedidos más comunes.
        </p>
      </div>
      <div
        className="grid4"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '22px' }}
      >
        {cats.map(([emoji, title, sub, dark]) => (
          <div
            key={title}
            style={{
              borderRadius: '26px',
              padding: '34px 30px',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: dark ? 'linear-gradient(160deg,#7C9068,#556546)' : '#F2ECDE',
            }}
          >
            <span style={{ fontSize: '56px' }}>{emoji}</span>
            <div>
              <div
                style={{
                  fontFamily: FB,
                  fontWeight: 800,
                  fontSize: '30px',
                  color: dark ? '#fff' : '#0A211A',
                }}
              >
                {title}
              </div>
              <div
                style={{
                  color: dark ? 'rgba(255,255,255,.8)' : 'rgba(10,33,26,.6)',
                  fontSize: '16px',
                  marginTop: '4px',
                }}
              >
                {sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== ALIADOS ===== */
export function Partners() {
  return (
    <section id="aliados" className="sec" style={{ background: '#F2ECDE', padding: '96px 72px' }}>
      <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
        <div
          style={{
            color: '#6E8060',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '.3em',
            textTransform: 'uppercase',
          }}
        >
          Aliados
        </div>
        <h2
          className="h2"
          style={{
            fontFamily: FB,
            fontWeight: 800,
            fontSize: '60px',
            lineHeight: 1,
            color: '#0A211A',
            letterSpacing: '-.03em',
            margin: '16px 0 0',
          }}
        >
          Restaurantes que ya nos eligen
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(10,33,26,.6)', margin: '18px 0 0' }}>
          Y cada semana se suman más. ¿Tienes un negocio? Únete a MotoGo.
        </p>
      </div>
      <div
        className="grid5"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '20px' }}
      >
        {aliados.map((a) => (
          <div
            key={a.name}
            style={{
              aspectRatio: '1',
              borderRadius: '22px',
              background: a.bg,
              border: '1px solid rgba(10,33,26,.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px',
              boxShadow: '0 14px 30px -18px rgba(0,0,0,.4)',
            }}
          >
            <img
              src={a.src}
              alt={a.name}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <a
          href={WHATSAPP_ALIADO}
          style={{
            display: 'inline-block',
            background: '#0A211A',
            color: '#F4EFE4',
            fontWeight: 700,
            fontSize: '18px',
            padding: '18px 38px',
            borderRadius: '14px',
          }}
        >
          Quiero ser aliado
        </a>
      </div>
    </section>
  );
}

/* ===== COBERTURA / EN VIVO ===== */
export function Coverage() {
  const feats = [
    'Mapa con tu repartidor en vivo',
    'Tiempo estimado de llegada',
    'Historial de tus pedidos',
  ];
  return (
    <section
      className="cov sec"
      style={{
        background: '#0A211A',
        padding: '96px 72px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '56px',
        alignItems: 'center',
      }}
    >
      <div>
        <div
          style={{
            color: '#9DB088',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '.3em',
            textTransform: 'uppercase',
          }}
        >
          En vivo · próximamente
        </div>
        <h2
          className="h2"
          style={{
            fontFamily: FB,
            fontWeight: 800,
            fontSize: '58px',
            lineHeight: '.98',
            color: '#fff',
            letterSpacing: '-.03em',
            margin: '16px 0 0',
          }}
        >
          Sigue tu moto
          <br />
          en tiempo real
        </h2>
        <p
          style={{
            fontSize: '20px',
            lineHeight: 1.5,
            color: 'rgba(255,255,255,.62)',
            margin: '22px 0 0',
            maxWidth: '480px',
          }}
        >
          Cuando lancemos la app y la web podrás ver exactamente dónde va tu pedido
          y cuánto falta para que llegue. Sin llamadas, sin dudas.
        </p>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '34px 0 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {feats.map((f) => (
            <li
              key={f}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                color: '#DCE6D2',
                fontSize: '19px',
              }}
            >
              <span
                style={{
                  width: '30px',
                  height: '30px',
                  flex: 'none',
                  borderRadius: '50%',
                  background: 'rgba(157,176,136,.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✓
              </span>{' '}
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="cov-map"
        style={{
          position: 'relative',
          height: '520px',
          borderRadius: '36px',
          overflow: 'hidden',
          background: '#dfe6d4',
          boxShadow: '0 40px 80px -34px rgba(0,0,0,.5)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(120,140,100,.22) 2px,transparent 2px),linear-gradient(90deg,rgba(120,140,100,.22) 2px,transparent 2px)',
            backgroundSize: '70px 70px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '7%',
            top: '12%',
            right: '36%',
            bottom: '44%',
            background: '#cdd8bf',
            borderRadius: '16px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '9%',
            bottom: '10%',
            width: '150px',
            height: '170px',
            background: '#cdd8bf',
            borderRadius: '16px',
          }}
        />
        <svg
          viewBox="0 0 640 520"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          <path
            d="M120 430 C 260 430 250 250 380 250 S 520 130 528 96"
            fill="none"
            stroke="#5C6E4E"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="3 20"
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            left: '104px',
            bottom: '76px',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: '#0A211A',
            border: '5px solid #fff',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '350px',
            top: '210px',
            background: '#0A211A',
            padding: '12px',
            borderRadius: '16px',
            boxShadow: '0 10px 22px rgba(0,0,0,.3)',
          }}
        >
          <span style={{ fontSize: '36px' }}>🛵</span>
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '26px',
            transform: 'translateX(-50%)',
            background: '#fff',
            borderRadius: '100px',
            padding: '14px 26px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 26px rgba(0,0,0,.18)',
          }}
        >
          <span
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: '#6E8060',
              boxShadow: '0 0 0 5px rgba(110,128,96,.25)',
            }}
          />
          <span style={{ fontWeight: 800, fontSize: '24px', color: '#0A211A' }}>
            Llega en 12 min
          </span>
        </div>
      </div>
    </section>
  );
}

/* ===== ZONAS Y PRECIOS ===== */
export function Zones() {
  const chips = ['Tulum Centro', 'La Veleta', 'Aldea Zama', 'Aldea Tulum', 'Zona Hotelera'];
  const prices = [
    ['Cerca', 'Tulum Centro', '$50', null],
    ['Intermedio', 'La Veleta – Aldea Zama', '$90', null],
    ['Lejos', 'Aldea Tulum – Zona Hotelera', '$120–$200', 'Según la zona exacta'],
  ];
  return (
    <section id="zonas" className="sec" style={{ background: '#F2ECDE', padding: '96px 72px' }}>
      <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 52px' }}>
        <div
          style={{
            color: '#6E8060',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '.3em',
            textTransform: 'uppercase',
          }}
        >
          Zonas y precios
        </div>
        <h2
          className="h2"
          style={{
            fontFamily: FB,
            fontWeight: 800,
            fontSize: '60px',
            lineHeight: 1,
            color: '#0A211A',
            letterSpacing: '-.03em',
            margin: '16px 0 0',
          }}
        >
          Llegamos a todo Tulum
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(10,33,26,.6)', margin: '18px 0 0' }}>
          Cubrimos Tulum Centro, La Veleta, Aldea Zama, Aldea Tulum y Zona Hotelera.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '52px',
        }}
      >
        {chips.map((c) => (
          <span
            key={c}
            style={{
              background: '#fff',
              border: '1px solid rgba(10,33,26,.08)',
              color: '#0A211A',
              fontWeight: 600,
              fontSize: '17px',
              padding: '12px 24px',
              borderRadius: '100px',
            }}
          >
            📍 {c}
          </span>
        ))}
      </div>

      <div
        className="grid3"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}
      >
        {prices.map(([tag, zone, price, note]) => (
          <div
            key={zone}
            style={{ background: '#0A211A', borderRadius: '26px', padding: '40px 34px' }}
          >
            <div
              style={{
                color: '#9DB088',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '.16em',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </div>
            <div
              style={{
                fontFamily: FB,
                fontWeight: 800,
                fontSize: '28px',
                color: '#fff',
                marginTop: '14px',
                lineHeight: 1.15,
              }}
            >
              {zone}
            </div>
            <div
              style={{
                fontFamily: FB,
                fontWeight: 800,
                fontSize: '56px',
                color: '#9DB088',
                marginTop: '16px',
                lineHeight: 1,
              }}
            >
              {price}
              <span
                style={{
                  fontSize: '22px',
                  color: 'rgba(255,255,255,.55)',
                  marginLeft: '6px',
                }}
              >
                MXN
              </span>
            </div>
            {note && (
              <div style={{ color: 'rgba(255,255,255,.55)', fontSize: '16px', marginTop: '8px' }}>
                {note}
              </div>
            )}
          </div>
        ))}
      </div>
      <p
        style={{
          textAlign: 'center',
          color: 'rgba(10,33,26,.5)',
          fontSize: '16px',
          margin: '28px 0 0',
        }}
      >
        Precios de envío. El costo de los productos es aparte.
      </p>
    </section>
  );
}

/* ===== FAQ ===== */
export function Faq() {
  return (
    <section id="faq" className="sec" style={{ background: '#0A211A', padding: '96px 72px' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 52px' }}>
        <div
          style={{
            color: '#9DB088',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '.3em',
            textTransform: 'uppercase',
          }}
        >
          Preguntas frecuentes
        </div>
        <h2
          className="h2"
          style={{
            fontFamily: FB,
            fontWeight: 800,
            fontSize: '60px',
            lineHeight: 1,
            color: '#fff',
            letterSpacing: '-.03em',
            margin: '16px 0 0',
          }}
        >
          Resolvemos tus dudas
        </h2>
      </div>
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {faqs.map((f) => (
          <details
            key={f.q}
            style={{
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(157,176,136,.16)',
              borderRadius: '18px',
            }}
          >
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                padding: '24px 28px',
              }}
            >
              <span
                className="faqq"
                style={{
                  fontFamily: FB,
                  fontWeight: 700,
                  fontSize: '22px',
                  color: '#F4EFE4',
                }}
              >
                {f.q}
              </span>
              <span
                className="faqicon"
                style={{
                  flex: 'none',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'rgba(157,176,136,.18)',
                  color: '#9DB088',
                  fontSize: '26px',
                  fontWeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                }}
              >
                +
              </span>
            </summary>
            <div
              style={{
                padding: '0 28px 26px',
                color: 'rgba(255,255,255,.62)',
                fontSize: '18px',
                lineHeight: 1.55,
              }}
            >
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ===== APP & WEB ===== */
export function AppWeb() {
  return (
    <section
      className="appweb sec"
      style={{
        background: '#F2ECDE',
        padding: '90px 72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '48px',
      }}
    >
      <div>
        <div
          style={{
            color: '#6E8060',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '.3em',
            textTransform: 'uppercase',
          }}
        >
          Muy pronto
        </div>
        <h2
          className="h2"
          style={{
            fontFamily: FB,
            fontWeight: 800,
            fontSize: '56px',
            lineHeight: 1,
            color: '#0A211A',
            letterSpacing: '-.03em',
            margin: '14px 0 0',
          }}
        >
          Llévate MotoGo
          <br />
          en el bolsillo
        </h2>
        <p
          style={{
            fontSize: '20px',
            color: 'rgba(10,33,26,.6)',
            margin: '18px 0 0',
            maxWidth: '460px',
          }}
        >
          Estamos construyendo la app y la web para que pidas en segundos. Déjanos
          tu WhatsApp y te avisamos al lanzar.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {[
          ['', 'App Store'],
          ['▶', 'Google Play'],
        ].map(([icon, store]) => (
          <div
            key={store}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              background: '#0A211A',
              color: '#fff',
              padding: '18px 28px',
              borderRadius: '16px',
            }}
          >
            <span style={{ fontSize: '34px' }}>{icon}</span>
            <div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.6)' }}>
                Próximamente en
              </div>
              <div style={{ fontWeight: 700, fontSize: '24px' }}>{store}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== CTA FINAL ===== */
export function FinalCta() {
  return (
    <section
      id="pedir"
      className="sec"
      style={{
        background: '#0A211A',
        padding: '110px 72px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(157,176,136,.2),transparent 66%)',
        }}
      />
      <div style={{ position: 'relative' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '9px',
            background: 'rgba(157,176,136,.16)',
            color: '#B7C7A6',
            fontWeight: 700,
            fontSize: '16px',
            padding: '10px 20px',
            borderRadius: '100px',
            marginBottom: '22px',
          }}
        >
          🛵 Envíos en Tulum
        </div>
        <h2
          className="h1"
          style={{
            fontFamily: FB,
            fontWeight: 800,
            fontSize: '88px',
            lineHeight: '.9',
            color: '#fff',
            letterSpacing: '-.045em',
            margin: 0,
          }}
        >
          Haz tu pedido hoy
        </h2>
        <p
          style={{
            fontSize: '23px',
            color: 'rgba(255,255,255,.62)',
            margin: '22px auto 0',
            maxWidth: '560px',
          }}
        >
          Escríbenos por WhatsApp o llámanos. Tu moto sale volando.
        </p>
        <div
          className="btnrow"
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            marginTop: '44px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={WHATSAPP_PEDIDO}
            style={{
              background: '#9DB088',
              color: '#0A211A',
              fontWeight: 800,
              fontSize: '20px',
              padding: '22px 40px',
              borderRadius: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            💬 Pedir por WhatsApp
          </a>
          <a
            href={PHONE_HREF}
            style={{
              border: '2px solid rgba(255,255,255,.24)',
              color: '#fff',
              fontWeight: 800,
              fontSize: '20px',
              padding: '22px 40px',
              borderRadius: '16px',
            }}
          >
            📞 {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===== FOOTER ===== */
export function Footer() {
  const nav = [
    ['#como', 'Cómo funciona'],
    ['#categorias', 'Servicios'],
    ['#aliados', 'Aliados'],
    ['#zonas', 'Zonas y precios'],
    ['#faq', 'FAQ'],
  ];
  return (
    <>
      <footer
        className="footer sec"
        style={{
          background: '#08190f',
          padding: '56px 72px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '40px',
        }}
      >
        <div style={{ maxWidth: '340px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/assets/logos/motogo-iso.png" alt="MotoGo" style={{ height: '44px' }} />
            <span style={{ fontWeight: 700, fontSize: '24px', color: '#F4EFE4' }}>
              MOTO <span style={{ color: '#9DB088' }}>GO</span>
            </span>
          </div>
          <p
            style={{
              color: 'rgba(255,255,255,.45)',
              fontSize: '16px',
              lineHeight: 1.5,
              margin: '18px 0 0',
            }}
          >
            Servicio de envíos en moto en Tulum. Comida, súper, farmacia y mandados
            a un clic.
          </p>
        </div>
        <div className="footcols" style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
          <div>
            <div
              style={{
                color: '#9DB088',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Navega
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {nav.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{ color: 'rgba(255,255,255,.65)', fontSize: '16px' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                color: '#9DB088',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Contacto
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href={PHONE_HREF} style={{ color: 'rgba(255,255,255,.65)', fontSize: '16px' }}>
                {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_PEDIDO} style={{ color: 'rgba(255,255,255,.65)', fontSize: '16px' }}>
                WhatsApp
              </a>
              <span style={{ color: 'rgba(255,255,255,.65)', fontSize: '16px' }}>
                Tulum, Q. Roo
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="sec"
        style={{
          background: '#08190f',
          padding: '22px 72px',
          borderTop: '1px solid rgba(255,255,255,.06)',
          textAlign: 'center',
          color: 'rgba(255,255,255,.35)',
          fontSize: '14px',
        }}
      >
        © 2026 MotoGo Tulum · Todos los derechos reservados
      </div>
    </>
  );
}
