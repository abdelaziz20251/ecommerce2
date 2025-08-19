// app/product/[id]/page.jsx
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AddToCartButton from "../../components/AddToCartButton";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then((res) => res.json())
                .then((data) => setProduct(data));
        }
    }, [id]);

    if (!product) return <p className="text-center py-10">Loading...</p>;

    return (
        <section className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <img src={product.image} alt={product.title} className="h-96 mx-auto object-contain" />
            <div>
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-600 my-4">{product.description}</p>
                <p className="text-red-500 font-bold text-xl">${product.price}</p>
                <AddToCartButton product={product} className="mt-4" />
            </div>
        </section>
    );
}
