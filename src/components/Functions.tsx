import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Functions: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const functions = [
        {
            id: 1,
            number: "01",
            title: "Análisis de entorno y timing",
            description: "Revisión de tu hogar u oficina y de los momentos clave.",
            bgClass: "bg-white border border-slate-300",
            textClass: "text-black",
            numberClass: "text-slate-400",
        },
        {
            id: 2,
            number: "02",
            title: "Ajustes estratégicos",
            description: "Recomendaciones claras alineadas con tu espacio, negocio y fecha de nacimiento.",
            bgClass: "bg-gradient-to-r from-[#F3D78A] to-[#E6C67A]",
            textClass: "text-black",
            numberClass: "text-black",
        },
        {
            id: 3,
            number: "03",
            title: "Integración y revisión",
            description: "Seguimiento para afinar y estabilizar los resultados.",
            bgClass: "bg-white border border-slate-300",
            textClass: "text-black",
            numberClass: "text-slate-400",
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? functions.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === functions.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
            <div className="mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1200 }}>
                <div className="w-full space-y-12 md:space-y-16">
                    {/* Title */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                            Cómo funciona la consultoría
                        </h2>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-1 gap-6 lg:gap-8">
                        {functions.map((func) => (
                            <div
                                key={func.id}
                                className={`rounded-3xl p-8 lg:p-10 flex items-center justify-between ${func.bgClass}`}
                            >
                                <div className="flex-1">
                                    <h3 className={`text-2xl lg:text-3xl font-bold ${func.textClass} mb-2`}>
                                        {func.title}
                                    </h3>
                                    <p className={`text-base lg:text-lg ${func.textClass} opacity-80`}>
                                        {func.description}
                                    </p>
                                </div>
                                <div className={`text-5xl lg:text-6xl font-bold ${func.numberClass} ml-6 flex-shrink-0`}>
                                    {func.number}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden">
                        <div className={`rounded-3xl p-8 flex flex-col ${functions[currentIndex].bgClass}`}>
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-1">
                                    <h3 className={`text-2xl font-bold ${functions[currentIndex].textClass} mb-2`}>
                                        {functions[currentIndex].title}
                                    </h3>
                                    <p className={`text-base ${functions[currentIndex].textClass} opacity-80`}>
                                        {functions[currentIndex].description}
                                    </p>
                                </div>
                                <div className={`text-5xl font-bold ${functions[currentIndex].numberClass} ml-4 flex-shrink-0`}>
                                    {functions[currentIndex].number}
                                </div>
                            </div>

                            {/* Carousel Controls */}
                            <div className="flex items-center justify-between mt-8">
                                <button
                                    onClick={handlePrev}
                                    className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeftIcon className={`w-6 h-6 ${functions[currentIndex].textClass}`} />
                                </button>

                                <div className="flex gap-2">
                                    {functions.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                index === currentIndex
                                                    ? "bg-black w-6"
                                                    : "bg-black/30"
                                            }`}
                                            aria-label={`Ir a tarjeta ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                                    aria-label="Siguiente"
                                >
                                    <ChevronRightIcon className={`w-6 h-6 ${functions[currentIndex].textClass}`} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Functions;