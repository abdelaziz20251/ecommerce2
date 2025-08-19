"use client";

import AddToCartButton from "./AddToCartButton";
import ViewDetailsButton from "./ViewDetailsButton";

export default function ExploreProducts({ products }) {
    return (
        <section className="py-12 container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Explore Our Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="border rounded-xl p-4 shadow hover:scale-105 transition"
                    >
                        <img
                            src={p.image}
                            alt={p.title}
                            className="h-40 mx-auto object-contain"
                        />
                        <h3 className="text-sm font-semibold mt-2 line-clamp-1">
                            {p.title}
                        </h3>
                        <p className="text-red-500 font-bold">${p.price}</p><br />
                        <div className="flex gap-2">
                            <AddToCartButton product={p} className="flex-1" />
                            <ViewDetailsButton productId={p.id} className="flex-1" />
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
