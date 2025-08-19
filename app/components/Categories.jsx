"use client";
import { Monitor, Smartphone, Headphones, ShoppingBag, Gamepad } from "lucide-react";

const categories = [
    { id: 1, name: "Phones", icon: <Smartphone size={28} /> },
    { id: 2, name: "Computers", icon: <Monitor size={28} /> },
    { id: 3, name: "SmartWatch", icon: <ShoppingBag size={28} /> },
    { id: 4, name: "Camera", icon: <Gamepad size={28} /> },
    { id: 5, name: "Headphones", icon: <Headphones size={28} /> },
    { id: 6, name: "Gaming", icon: <Gamepad size={28} /> },
];

export default function Categories() {
    return (
        <section className="py-12 container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Browse By Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="border rounded-xl p-6 flex flex-col items-center justify-center gap-3 shadow hover:bg-red-500 hover:text-white cursor-pointer transition"
                    >
                        {cat.icon}
                        <p className="text-sm font-medium">{cat.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
