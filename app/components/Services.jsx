export default function Services() {
    return (
        <div className="flex justify-center items-center py-8 space-x-8">
            <div className="flex space-x-20">
                <div className="flex flex-col items-center text-center">
                    <div className="bg-gray-100 p-4 rounded-full mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                            <circle cx="7" cy="17" r="2" />
                            <path d="M9 17h6" />
                            <circle cx="17" cy="17" r="2" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold text-lg text-gray-800">Free Delivery</p>
                        <p className="text-sm text-gray-600">Worldwide</p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="bg-gray-100 p-4 rounded-full mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                            <path d="M2 12l5 5L22 2" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold text-lg text-gray-800">Money Returns</p>
                        <p className="text-sm text-gray-600">30 Days money return</p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="bg-gray-100 p-4 rounded-full mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                            <path d="M12 2v3m4 4V5l2 2M12 9v9l2 2M2 12h3m4 4v3m7-5h2m-2-2v3h2" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold text-lg text-gray-800">24/7 Online Support</p>
                        <p className="text-sm text-gray-600">Customer Support</p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="bg-gray-100 p-4 rounded-full mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                            <path d="M22 12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v8z" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold text-lg text-gray-800">Payment Security</p>
                        <p className="text-sm text-gray-600">Safe Payment</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
