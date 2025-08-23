"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import FavoriteButton from "./FavoriteButton"; // استدعاء الزر الجديد
import AddToCartButton from "./AddToCartButton";
import ViewDetailsButton from "./ViewDetailsButton";

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
                <div className="flex gap-2 w-full">
                    <AddToCartButton product={props} className="flex-1" />
                    <ViewDetailsButton productId={props.id} className="flex-1" />
                </div>
            </div>
        </div>
    );
}
