"use client";
import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import ViewDetailsButton from "./ViewDetailsButton";


export default function NewArrival() {
    const [newArrivals, setNewArrivals] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=4")
            .then((res) => res.json())
            .then((data) => setNewArrivals(data));
    }, []);

    return (
        <section className="py-12 container mx-auto">
            <h2 className="text-2xl font-bold mb-6">New Arrival</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newArrivals.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-100 p-6 flex flex-col justify-center items-center rounded-lg"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-56 object-contain"
                        />
                        <h3 className="font-semibold mt-4 text-center line-clamp-1">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 text-center">${item.price}</p><br />
                        <div className="flex gap-2">
                            <AddToCartButton product={item} className="flex-1" />
                            <ViewDetailsButton productId={item.id} className="flex-1" />
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
