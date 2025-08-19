"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"; // 👈 استدعاء الكارت الجاهز

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10; // 👈 عدد المنتجات في كل صفحة

    // 🟢 Fetch المنتجات
    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch("https://fakestoreapi.com/products?limit=195");
            const data = await res.json();
            setProducts(data);
            setFiltered(data);
        }
        fetchProducts();
    }, []);

    // 🟡 Search Function (title + description)
    const handleSearch = (value) => {
        setQuery(value);
        setCurrentPage(1);
        if (!value) {
            setFiltered(products);
        } else {
            setFiltered(
                products.filter((p) =>
                    p.title.toLowerCase().includes(value.toLowerCase()) ||
                    p.description.toLowerCase().includes(value.toLowerCase())
                )
            );
        }
    };

    // 🟣 Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

            {/* ✅ Search Bar */}
            <div className="w-full max-w-md mx-auto mb-6">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search for products..."
                    className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
            </div>

            {/* ✅ Products Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {currentItems.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        rating={product.rating?.rate} // 👈 بعض المنتجات عندها rating
                    />
                ))}
            </div>

            {/* ✅ Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-8">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
