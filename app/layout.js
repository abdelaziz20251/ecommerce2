import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { CartProvider } from './context/CartContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { FavoritesProvider } from "./context/FavoritesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amit Stores",
  description: "Your one-stop shop for everything you need!",
  icons: {
    icon: null, // explicitly remove favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <CartProvider>
          <FavoritesProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
