import './globals.css';
import { Bricolage_Grotesque, Space_Grotesk } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const space = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://motogotulum.app'),
  title:
    'MotoGo Tulum — Envíos rápidos en moto | Comida, súper, farmacia y mandados',
  description:
    'MotoGo: servicio de envíos en moto en Tulum. Comida, súper, farmacia y cualquier mandado a un clic. Pide por WhatsApp al 984 309 4535.',
  icons: { icon: '/assets/logos/motogo-iso.png' },
  openGraph: {
    title: 'MotoGo Tulum — Todo Tulum, a un clic',
    description:
      'Comida, súper, farmacia y mandados. Tú lo pides, nosotros lo llevamos volando. Pide por WhatsApp.',
    images: ['/assets/logos/motogo-iso.png'],
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0A211A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${space.variable}`}>
      <body>
        <div className="wrap">{children}</div>
      </body>
    </html>
  );
}
