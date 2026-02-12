import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BioLink - Guilherme Florentino',
  description: 'Web Designer Portfolio and Links',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}