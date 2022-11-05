import Header from './Header';
import '../styles/globals.css';
import { Inter, Roboto } from '@next/font/google';

const roboto = Roboto({ weight: '400' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
