import React, { useMemo } from "react";

const CheckoutButton = ({ cart }) => {
    // نحسب المجموع الكلي
    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    }, [cart]);

    // تجهيز نص الرسالة المرسل عبر WhatsApp
    const generateWhatsAppMessage = () => {
        let message = "مرحباً! هذا هو طلبك:\n\n";
        cart.forEach((item) => {
            message += `${item.title} - ${item.quantity} × $${item.price}\n`;
        });
        message += `\nالمجموع النهائي: $${total}\n\nالرجاء تأكيد الطلب.`;
        return encodeURIComponent(message); // تأكد من ترميز النص بشكل صحيح
    };

    const whatsappNumber = "+201158300617"; // استبدل برقم الواتساب الخاص بك
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-full block bg-green-600 text-white py-3 px-4 rounded-xl font-semibold text-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all"
        >
            Checkout
        </a>
    );
};

export default CheckoutButton;