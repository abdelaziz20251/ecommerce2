"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); // نرجع القيمة للصفحة علشان تعمل الفلترة
    };

    return (
        <div className="w-full max-w-md mx-auto mb-6">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for products..."
                className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
        </div>
    );
}
