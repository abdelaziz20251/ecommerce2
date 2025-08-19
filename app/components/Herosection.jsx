// components/HeroCarousel.js
"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function HeroCarousel() {
    const [products, setProducts] = useState([]);

    // Fetch products from FakeStore API
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=10") // limit to 5 items for hero
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <section className="relative w-full bg-[#fbeee3]">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="w-full"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6">

                            {/* Left Text Section */}
                            <div className="text-center md:text-left max-w-lg">
                                <p className="text-sm font-medium text-gray-600">
                                    Special Offer — Only ${product.price}
                                </p>
                                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2">
                                    {product.title}
                                </h1>
                                <p className="text-gray-700 mt-4 line-clamp-3">
                                    {product.description}
                                </p>
                                <button className="mt-6 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full px-6 py-2 text-lg transition">
                                    Shop Now
                                </button>
                            </div>

                            {/* Right Image Section */}
                            <div className="mt-10 md:mt-0 md:ml-10">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    width={300}
                                    height={300}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
