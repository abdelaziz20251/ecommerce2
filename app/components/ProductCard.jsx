"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import FavoriteButton from "./FavoriteButton"; // استدعاء الزر الجديد

export default function ProductCard(props) {
    const { cart, addToCart } = useCart();

    // المنتج في الكارت؟
    const isInCart = cart.some((item) => item.id === props.id);
    const [added, setAdded] = useState(isInCart);

    const handleAddToCart = () => {
        if (!added) {
            addToCart(props);
            setAdded(true);
        }
    };

    return (
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300 flex flex-col relative">
            {/* ❤️ زر المفضلة (مستقل) */}
            <FavoriteButton product={props} />

            {/* شارة الخصم */}
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -20%
            </span>

            {/* صورة المنتج */}
            <img
                src={props.image}
                alt={props.title}
                className="w-full h-48 object-contain p-4"
            />

            {/* تفاصيل المنتج */}
            <div className="px-4 pb-4 flex flex-col items-start">
                <h4 className="text-sm font-medium mb-1 text-gray-800 line-clamp-1">
                    {props.title}
                </h4>
                <p className="text-lg font-bold text-red-600 mb-1">
                    ${props.price}
                </p>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-gray-700 text-sm">{props.rating}</span>
                </div>

                {/* الأزرار */}
                <div className="flex flex-row space-x-2 w-full">
                    <button
                        onClick={handleAddToCart}
                        disabled={added}
                        className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${added
                            ? "bg-gray-400 cursor-not-allowed text-white"
                            : "bg-red-500 hover:bg-red-600 text-white"
                            }`}
                    >
                        {added ? "Added ✅" : "Add to Cart"}
                    </button>

                    <Link
                        href={`/product/${props.id}`}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm text-center"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
