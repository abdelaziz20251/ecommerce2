// 📂 app/about/page.jsx
"use client";
import { useState } from "react";

export default function AboutPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "هل المنتجات أصلية 100%؟",
            a: "أيوه ✅ كل المنتجات عندنا أصلية وبتتجاب من موردين معتمدين."
        },
        {
            q: "قد إيه بياخد وقت الشحن؟",
            a: "الشحن بيتم خلال 2-5 أيام عمل حسب مكانك."
        },
        {
            q: "هل فيه خدمة استرجاع المنتجات؟",
            a: "طبعًا 📦 عندك 14 يوم تقدر ترجع المنتج لو مش مطابق للمواصفات."
        },
        {
            q: "إيه طرق الدفع المتاحة؟",
            a: "ممكن تدفع كاش عند الاستلام أو أونلاين بالفيزا / ماستر كارد."
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* العنوان الرئيسي */}
            <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>

            {/* المقدمة */}
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mb-12">
                <p className="text-gray-700 leading-relaxed mb-4">
                    أهلاً بيك في <span className="font-semibold text-red-500">Amit Stores</span> 👋
                    متجرك المفضل اللي بيقدملك منتجات أصلية بجودة عالية وأسعار مناسبة.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    من يوم ما بدأنا، هدفنا الأساسي إننا نوفرلك تجربة تسوق مريحة وسريعة، ونوصللك منتجاتك بأفضل خدمة ممكنة.
                </p>
            </div>

            {/* فريق العمل */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold text-center mb-8">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        { name: "Ahmed Ali", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/men/32.jpg" },
                        { name: "Sara Mohamed", role: "Marketing Manager", img: "https://randomuser.me/api/portraits/women/45.jpg" },
                        { name: "Omar Hassan", role: "Tech Lead", img: "https://randomuser.me/api/portraits/men/85.jpg" },
                    ].map((member, index) => (
                        <div key={index} className="bg-white shadow-md rounded-xl p-6 text-center">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                            />
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <p className="text-gray-500 text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold text-center mb-8">Our Journey</h2>
                <div className="relative max-w-3xl mx-auto">
                    <div className="border-l-4 border-red-500 absolute h-full left-5 top-0"></div>
                    <div className="space-y-8">
                        {[
                            { year: "2018", text: "بدأنا المتجر أونلاين بفريق صغير." },
                            { year: "2020", text: "وصلنا لأكتر من 10,000 عميل." },
                            { year: "2022", text: "فتحنا أول فرع على أرض الواقع." },
                            { year: "2024", text: "وسعنا نشاطنا لخدمة عملاء في كل الوطن العربي." },
                        ].map((item, index) => (
                            <div key={index} className="ml-12 relative">
                                <div className="absolute -left-6 top-1.5 w-4 h-4 bg-red-500 rounded-full"></div>
                                <h3 className="font-semibold text-red-500">{item.year}</h3>
                                <p className="text-gray-700">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section>
                <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-4 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">{faq.q}</h3>
                                <span>{openIndex === index ? "−" : "+"}</span>
                            </div>
                            {openIndex === index && (
                                <p className="text-gray-600 mt-2">{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
