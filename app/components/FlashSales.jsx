"use client";
import AddToCartButton from "./AddToCartButton";
import ViewDetailsButton from "./ViewDetailsButton";

export default function FlashSales({ products }) {
    return (
        <section className="py-10 container mx-auto">
            {/* Title + Timer */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Flash Sales</h2>
                {/* ... باقي الكود الخاص بالتايمر */}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="border rounded-xl p-4 shadow hover:scale-105 transition relative"
                    >
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -20%
                        </span>
                        <img
                            src={p.image}
                            alt={p.title}
                            className="h-40 mx-auto object-contain"
                        />
                        <h3 className="text-sm font-semibold mt-2 line-clamp-1">{p.title}</h3>
                        <p className="text-red-500 font-bold">${p.price}</p>
                        <p className="text-gray-400 text-xs">⭐ {p.rating?.rate || 4.5}</p><br />

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
