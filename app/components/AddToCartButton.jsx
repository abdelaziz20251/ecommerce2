"use client";
import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product, className = "" }) {
    const { addToCart, removeFromCart, cart } = useCart();

    const inCart = cart.some((item) => item.id === product.id);

    return (
        <button
            onClick={() => (inCart ? removeFromCart(product.id) : addToCart(product))}
            className={`
                px-4 py-2 rounded-lg text-sm font-medium transition duration-300
                ${inCart
                    ? "bg-gray-600 hover:bg-gray-700 text-white"
                    : "bg-red-500 hover:bg-red-600 text-white"}
                ${className}
            `}
        >
            {inCart ? "Added" : "Add to Cart"}
        </button>
    );
}
