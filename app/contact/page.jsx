// 📂 app/contact/page.jsx
"use client";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا تقدر تبعت الفورم لـ API / خدمة ايميل
        console.log(form);
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8">
                {submitted ? (
                    <p className="text-green-600 text-center font-medium">
                        ✅ شكراً لتواصلك! هنرد عليك قريب.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
