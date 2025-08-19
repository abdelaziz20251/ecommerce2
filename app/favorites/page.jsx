"use client";
import { useFavorites } from "../context/FavoritesContext";
import AddToCartButton from "../components/AddToCartButton";
import ViewDetailsButton from "../components/ViewDetailsButton";
export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">My Favorites</h1>

            {favorites.length === 0 ? (
                <p>No favorite products yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {favorites.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow">
                            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
                            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
                            <p className="text-gray-500">£{product.price}</p><br />
                            <div className="flex gap-2">
                                <AddToCartButton product={product} className="flex-1" />
                                <ViewDetailsButton productId={product.id} className="flex-1" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
