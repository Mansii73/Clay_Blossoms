import './globals.css';
import Footer from './(main)/Footer';
import Navbar from './(main)/Navbar';
import { AuthProvider } from '../context/AuthContext';

export const metadata = {
  title: 'ClayBlossoms',
  description: 'Handcrafted Clay Products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
