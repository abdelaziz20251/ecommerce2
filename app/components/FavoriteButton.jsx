"use client";
import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoriteButton({ product }) {
    const { favorites, toggleFavorite } = useFavorites();

    // المنتج في المفضلة؟
    const isFavorite = favorites.some((item) => item.id === product.id);

    return (
        <button
            className="absolute top-3 right-3 z-10"
            onClick={() => toggleFavorite(product)}
        >
            <Heart
                className={`w-6 h-6 ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"
                    }`}
            />
        </button>
    );
}
