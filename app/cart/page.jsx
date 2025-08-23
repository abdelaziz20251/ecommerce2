"use client";
import { useCart } from "../context/CartContext";
import { useMemo } from "react";
import CheckoutButton from "../components/CheckoutButton";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity } = useCart();

    // نحسب المجموع الكلي
    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    }, [cart]);

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Cart is empty</p>
            ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* المنتجات */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-20 w-20 object-contain rounded-lg border"
                                    />
                                    <div>
                                        <h2 className="font-semibold text-lg">{item.title}</h2>
                                        <p className="text-red-500 font-bold">${item.price}</p>
                                    </div>
                                </div>

                                {/* التحكم في الكمية */}
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-40"
                                    >
                                        −
                                    </button>
                                    <span className="font-semibold">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* زر الإزالة */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* ملخص الطلب */}
                    <div className="bg-white shadow-lg rounded-xl p-6 h-fit">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <p className="flex justify-between mb-2">
                            <span>Total Items:</span>
                            <span className="font-semibold">{cart.length}</span>
                        </p>
                        <p className="flex justify-between mb-4">
                            <span>Total Price:</span>
                            <span className="font-bold text-red-500">${total}</span>
                        </p>

                        {/* ترتيب الأزرار بشكل أفقي */}
                        <div className="flex gap-4">
                            {/* استخدام زر CheckoutButton هنا */}
                            <CheckoutButton cart={cart} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}