import React, { useState } from "react";

const Testimonies: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonies = [
        {
            id: 1,
            name: "Giancarlo Avilés",
            image: "/images/testimonies/testimonies.webp",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper conque, euismod non, mi. Non fermentum diam nisl sit amet erat. Duis semper.",
        },
        {
            id: 2,
            name: "Giancarlo Avilés",
            image: "/images/testimonies/testimonies.webp",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper conque, euismod non, mi. Non fermentum diam nisl sit amet erat. Duis semper.",
        },
        {
            id: 3,
            name: "Giancarlo Avilés",
            image: "/images/testimonies/testimonies.webp",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper conque, euismod non, mi. Non fermentum diam nisl sit amet erat. Duis semper.",
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
    };

    return (
        <section
            className="relative w-full bg-white py-16 md:py-20 lg:py-24"
            aria-label="Testimonios de clientes"
        >
            <div className="mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1200 }}>
                <div className="w-full space-y-12 md:space-y-16">
                    {/* Title */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                            Clientes que lograron
                            <br />
                            <span className="text-[#D4AF37]">cambiar sus vidas conmigo</span>
                        </h2>
                    </div>

                    {/* Testimonies Grid - Desktop */}
                    <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                        {testimonies.map((testimony) => (
                            <div key={testimony.id} className="relative">
                                <div className="bg-slate-50 rounded-2xl p-8 pt-16 text-center flex flex-col items-center border border-slate-200 hover:border-[#D4AF37]/30 transition-colors duration-300">
                                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-black mb-4">
                                        {testimony.name}
                                    </h3>
                                    <p className="text-lg md:text-2xl lg:text-3xl text-slate-700 leading-relaxed text-center">
                                        {testimony.text}
                                    </p>
                                </div>
                                <img
                                    src={testimony.image}
                                    alt={testimony.name}
                                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full object-cover border-4 border-white"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Testimonies Carousel - Mobile & Tablet */}
                    <div className="lg:hidden">
                        <div className="relative">
                            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 pt-16 text-center border border-slate-200">
                                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-black mb-4">
                                    {testimonies[currentIndex].name}
                                </h3>
                                <p className="text-lg md:text-2xl lg:text-3xl text-slate-700 leading-relaxed text-justify">
                                    {testimonies[currentIndex].text}
                                </p>
                            </div>
                            <img
                                src={testimonies[currentIndex].image}
                                alt={testimonies[currentIndex].name}
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white"
                            />
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex items-center justify-center gap-3 mt-8">
                            {testimonies.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        index === currentIndex
                                            ? "bg-[#D4AF37] w-8"
                                            : "bg-slate-400 hover:bg-slate-500"
                                    }`}
                                    aria-label={`Ir a testimonio ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>                
                </div>
            </div>
        </section>
    );
};

export default Testimonies;