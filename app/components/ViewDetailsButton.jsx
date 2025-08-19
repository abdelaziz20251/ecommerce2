"use client";
import { useRouter } from "next/navigation";

export default function ViewDetailsButton({ productId, className = "" }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${productId}`);
    };

    return (
        <button
            onClick={handleClick}
            className={`
                bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium
                hover:bg-blue-700 active:scale-95 transition duration-300
                ${className}
            `}
        >
            View Details
        </button>
    );
}
