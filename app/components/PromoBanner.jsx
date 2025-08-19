"use client";
import { useEffect, useState } from "react";
import ViewDetailsButton from "./ViewDetailsButton"; // استدعاء الزرار

export default function PromoBanner() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                const random = data[Math.floor(Math.random() * data.length)];
                setProduct(random);
            });
    }, []);

    if (!product) {
        return (
            <section className="bg-black py-16 mt-12 text-center text-white">
                <p>Loading promo...</p>
            </section>
        );
    }

    return (
        <section className="bg-black py-16 mt-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white gap-6">
                <div>
                    <p className="uppercase text-green-400 font-semibold">Special Offer</p>
                    <h2 className="text-3xl font-bold max-w-md mb-4">{product.title}</h2>
                    <p className="mb-4 text-gray-300 line-clamp-2">{product.description}</p>
                    <p className="mb-4 font-bold text-lg">${product.price}</p>

                    {/* الزرار الجديد */}
                    <ViewDetailsButton productId={product.id} />
                </div>

                <img
                    src={product.image}
                    alt={product.title}
                    className="h-56 object-contain"
                />
            </div>
        </section>
    );
}
