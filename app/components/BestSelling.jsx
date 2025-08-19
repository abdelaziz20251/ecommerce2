"use client";

import AddToCartButton from "./AddToCartButton";
import ViewDetailsButton from "./ViewDetailsButton";

export default function BestSelling({ products }) {
    return (
        <section className="py-12 container mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Best Selling Products</h2>
                <a href="/products" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                    View All
                </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="border rounded-xl p-4 shadow hover:shadow-lg hover:scale-105 transition"
                    >
                        <img
                            src={p.image}
                            alt={p.title}
                            className="h-40 mx-auto object-contain"
                        />
                        <h3 className="text-sm font-semibold mt-2 line-clamp-1">
                            {p.title}
                        </h3>
                        <p className="text-red-500 font-bold mb-3">${p.price}</p>

                        {/* الأزرار */}
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
