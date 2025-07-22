import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my work and skills.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-24 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
