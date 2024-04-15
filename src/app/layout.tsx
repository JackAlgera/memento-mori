import './globals.scss';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Memento Mori',
  description: 'Memento Mori',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>
        <div className="context-container">
          <div className="context">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
