"use client";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext"; // ✅ استدعاء الكونتكست الجديد
import Link from "next/link";

export default function Navbar() {
    const { cart, removeFromCart } = useCart();
    const { favorites, removeFromFavorites } = useFavorites(); // ✅ Favorites
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [favoritesOpen, setFavoritesOpen] = useState(false); // ✅ لفتح/غلق الفيفوريتس
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cartTotal = cart.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
    );

    return (
        <header className="w-full z-50 sticky top-0 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
                {/* Logo */}
                <h1 className="text-2xl font-bold cursor-pointer">Amit Stores</h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="/" className="hover:text-red-500">Home</Link>

                    {/* Dropdown */}
                    <div className="relative">
                        <button
                            className="flex items-center hover:text-red-500"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Products <ChevronDown className="w-4 h-4 ml-1" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-md w-40 z-50">
                                <Link href="/products" className="block px-4 py-2 hover:bg-gray-100">Products</Link>
                                <Link href="/cart" className="block px-4 py-2 hover:bg-gray-100">Cart</Link>
                                <Link href="/favorites" className="block px-4 py-2 hover:bg-gray-100">Favorites</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/contact" className="hover:text-red-500">Contact</Link>
                    <Link href="/about" className="hover:text-red-500">About</Link>
                    <Link href="/login" className="hover:text-red-500">Login</Link>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-6">

                    {/* ❤️ Favorites Dropdown */}
                    <div className="relative">
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setFavoritesOpen(!favoritesOpen)}
                        >
                            <Heart className="w-6 h-6 text-red-500" />
                            {favorites.length > 0 && (
                                <span className="text-sm font-semibold text-gray-700">
                                    {favorites.length} saved
                                </span>
                            )}
                        </div>

                        {favoritesOpen && (
                            <div className="absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg z-50">
                                <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                                    {favorites.length > 0 ? (
                                        favorites.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center gap-3 border-b pb-3 last:border-b-0"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-12 w-12 object-contain"
                                                />
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium">{item.title}</p>
                                                    <p className="text-xs text-gray-500">£{item.price}</p>
                                                </div>
                                                <button
                                                    className="text-red-500 hover:text-red-700 font-bold"
                                                    onClick={() => removeFromFavorites(item.id)}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-center text-sm text-gray-500">No favorites yet</p>
                                    )}
                                </div>

                                {favorites.length > 0 && (
                                    <div className="p-3 border-t">
                                        <Link
                                            href="/favorites"
                                            className="block bg-red-500 text-white text-center py-2 rounded hover:bg-red-600"
                                        >
                                            View All Favorites
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* 🛒 Cart */}
                    <div className="relative">
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setCartOpen(!cartOpen)}
                        >
                            <ShoppingCart className="w-6 h-6 text-gray-700" />
                            {cart.length > 0 && (
                                <span className="text-sm font-semibold text-gray-700">
                                    {cart.length} items&nbsp;
                                    <span className="text-blue-600 font-bold">
                                        £{cartTotal.toFixed(2)}
                                    </span>
                                </span>
                            )}
                        </div>

                        {cartOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg transition-all duration-200 z-50">
                                <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                                    {cart.length > 0 ? (
                                        cart.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center gap-3 border-b pb-3 last:border-b-0"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-12 w-12 object-contain"
                                                />
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium">{item.title}</p>
                                                    <p className="text-xs text-gray-500">
                                                        Qty: {item.quantity || 1} × £{item.price}
                                                    </p>
                                                </div>
                                                <button
                                                    className="text-red-500 hover:text-red-700 font-bold"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-center text-sm text-gray-500">Cart is empty</p>
                                    )}
                                </div>
                                {cart.length > 0 && (
                                    <div className="p-4 border-t">
                                        <div className="flex justify-between font-bold mb-3">
                                            <span>Total:</span>
                                            <span>£{cartTotal.toFixed(2)}</span>
                                        </div>
                                        <Link
                                            href="/checkout"
                                            className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
                                        >
                                            Proceed to Checkout
                                        </Link><br />
                                        <Link
                                            href="/cart"
                                            className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
                                        >
                                            View All
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <User className="cursor-pointer" />

                    {/* Burger Menu (Mobile) */}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg p-4 absolute top-0 left-0 w-full z-40">
                    {/* زرار اغلاق */}
                    <div className="flex justify-end mb-4">
                        <button onClick={() => setMenuOpen(false)}>
                            <X className="w-6 h-6 text-gray-700 hover:text-red-500" />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-4">
                        <Link href="/" className="hover:text-red-500">Home</Link>
                        <Link href="/products" className="hover:text-red-500">Products</Link>
                        <Link href="/contact" className="hover:text-red-500">Contact</Link>
                        <Link href="/about" className="hover:text-red-500">About</Link>
                        <Link href="/login" className="hover:text-red-500">Login</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}