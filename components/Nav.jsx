'use client';

import { useState } from 'react';
import { WHATSAPP_PEDIDO } from '@/lib/data';

const FS = 'var(--font-space), sans-serif';
const linkStyle = {
  color: 'rgba(244,239,228,.75)',
  fontWeight: 600,
  fontSize: '17px',
};

const links = [
  ['#como', 'Cómo funciona'],
  ['#categorias', 'Servicios'],
  ['#aliados', 'Aliados'],
  ['#zonas', 'Zonas y precios'],
  ['#faq', 'FAQ'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sec"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 72px',
        background: 'rgba(10,33,26,.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(157,176,136,.14)',
      }}
    >
      <div
        className="navbrand"
        style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logos/motogo-iso.png"
          alt="MotoGo"
          style={{ height: '48px', width: 'auto' }}
        />
        <span
          style={{
            fontFamily: FS,
            fontWeight: 700,
            fontSize: '28px',
            color: '#F4EFE4',
            letterSpacing: '-.01em',
          }}
        >
          MOTO <span style={{ color: '#9DB088' }}>GO</span>
        </span>
      </div>

      <div
        className={`navlinks${open ? ' open' : ''}`}
        style={{ display: 'flex', alignItems: 'center', gap: '36px' }}
      >
        {links.map(([href, label]) => (
          <a
            key={href}
            href={href}
            style={linkStyle}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <a
          href={WHATSAPP_PEDIDO}
          style={{
            background: '#9DB088',
            color: '#0A211A',
            fontWeight: 700,
            fontSize: '16px',
            padding: '12px 24px',
            borderRadius: '100px',
          }}
        >
          Pedir ahora
        </a>
        <button
          type="button"
          className={`navtoggle${open ? ' open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
