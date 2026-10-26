import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kenyan Connect | Location-Based Dating',
  description: 'Connect with people near you in Kenya. Location-based matchmaking for Nairobi, Mombasa, Kisumu and beyond.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
