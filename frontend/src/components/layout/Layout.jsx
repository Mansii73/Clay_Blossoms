import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
} 