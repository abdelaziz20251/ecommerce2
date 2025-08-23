"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ViewDetailsButton from "./ViewDetailsButton";
import AddToCartButton from "./AddToCartButton";

export default function HeroCarousel() {
    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=10")
            .then((res) => res.json())
            .then((data) => setSlides(data));
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (slides.length > 0 ? (prev + 1) % slides.length : 0));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides]);

    if (slides.length === 0) {
        return (
            <section className="h-[400px] flex items-center justify-center bg-gray-100">
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center h-[500px] md:h-[450px] text-white px-6 md:px-16 gap-6 md:gap-10"
                    >
                        {/* النصوص */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
                                {slide.title}
                            </h2>
                            <p className="text-gray-300 mb-4 line-clamp-3">{slide.description}</p>
                            <p className="text-lg font-semibold mb-6 text-green-400">
                                ${slide.price}
                            </p>
                            <div className="flex gap-3 justify-center md:justify-start">
                                <AddToCartButton product={slide} className="px-4 py-2 text-sm" />
                                <ViewDetailsButton productId={slide.id} className="px-4 py-2 text-sm" />
                            </div>
                        </div>

                        {/* الصورة */}
                        <div className="flex-1 flex items-center justify-center">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="object-contain max-h-[250px] md:max-h-[400px] drop-shadow-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={() =>
                    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
                }
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
            >
                <ChevronLeft className="text-gray-800" />
            </button>
            <button
                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
            >
                <ChevronRight className="text-gray-800" />
            </button>
        </section>
    );
}
