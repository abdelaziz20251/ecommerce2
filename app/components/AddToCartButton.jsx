"use client";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Check } from "lucide-react";

export default function AddToCartButton({ product, className = "" }) {
    const { addToCart, removeFromCart, cart } = useCart();

    const inCart = cart.some((item) => item.id === product.id);

    return (
        <button
            onClick={() => (inCart ? removeFromCart(product.id) : addToCart(product))}
            className={`
                flex items-center justify-center gap-1
                px-3 py-2 rounded-lg text-sm font-medium
                shadow-sm active:scale-95 transition-all duration-200
                ${inCart
                    ? "bg-gray-700 hover:bg-gray-800 text-white"
                    : "bg-red-500 hover:bg-red-600 text-white"}
                ${className}
            `}
        >
            {inCart ? (
                <>
                    <Check className="w-4 h-4" />
                    Added
                </>
            ) : (
                <>
                    <ShoppingCart className="w-4 h-4" />
                    Add
                </>
            )}
        </button>
    );
}
``
