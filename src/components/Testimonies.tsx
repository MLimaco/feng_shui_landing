import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Testimonies: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonies = [
        {
            id: 1,
            name: "Carlos Mendoza",
            subtitle: "ALUMNO DE LA MENTORÍA DE DRAGON WITHIN",
            text: "Estoy agradecido con Giancarlo, porque en el 2023, él me hizo una sesión una asesoría Feng shui con la cual descubrí de yo estaba pasando por momentos personales y financieros muy complicados mi situación cambió completamente para bien y desde ese momento las cosas me han ido de bien mejor y es por eso que yo recomiendo su asesoría. Su seguimiento recomiendo al 100% todo lo que él hace porque es un gran profesional y ayuda mucho a las personas con las cuales él trabaja a mejorar su vida",
            videoId: "cVw84rcsNEo",
        },
        {
            id: 2,
            name: "María López",
            subtitle: "EMPRENDEDORA Y FUNDADORA DE STARTUPS",
            text: "La consultoría de Giancarlo fue transformadora para mi negocio. Los ajustes que recomendó en mi oficina generaron un cambio inmediato en la energía y productividad del equipo. Las decisiones que tomo ahora son más claras y precisas. Recomiendo ampliamente su trabajo a cualquier emprendedor que busque estabilidad y crecimiento real en sus proyectos.",
            videoId: "MYxQoyEZD7I",
        },
        {
            id: 3,
            name: "José García",
            subtitle: "DIRECTOR EJECUTIVO Y EMPRESARIO",
            text: "Antes de trabajar con Giancarlo sentía que algo me faltaba a pesar del éxito. El análisis de feng shui y astrología que realizó cambió mi perspectiva completamente. Ahora entiendo cuál es el momento adecuado para tomar decisiones importantes. La claridad que he ganado es invaluable y ya la he compartido con mis colegas. Definitivamente ha sido la mejor inversión en mi desarrollo personal.",
            videoId: "zmr-OeHC0DM",
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
    };

    const currentTestimony = testimonies[currentIndex];

    return (
        <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
            <div className="mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1200 }}>
                <div className="w-full space-y-12 md:space-y-16">
                    {/* Title */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                            Testimonios de alumnos que lograron
                            <br />
                            <span className="text-[#D4AF37]">cambiar sus vidas conmigo</span>
                        </h2>
                    </div>

                    {/* Carousel */}
                    <div className="relative">
                        <div className="flex items-center justify-center gap-4 md:gap-8">
                            {/* Left Arrow */}
                            <button
                                onClick={handlePrev}
                                className="p-3 rounded-full bg-[#D4AF37] hover:bg-[#C4A02F] transition-colors shadow-lg flex-shrink-0"
                                aria-label="Testimonio anterior"
                            >
                                <ChevronLeftIcon className="w-6 h-6 text-black" />
                            </button>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center flex-1">
                                {/* Text Box */}
                                <div className="bg-slate-100 rounded-3xl p-8 md:p-10 lg:p-12 order-2 md:order-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                                        {currentTestimony.name}
                                    </h3>
                                    <p className="text-xs md:text-sm font-semibold text-slate-600 mb-6 uppercase tracking-wide">
                                        {currentTestimony.subtitle}
                                    </p>
                                    <p className="text-sm md:text-base lg:text-lg text-black leading-relaxed">
                                        {currentTestimony.text}
                                    </p>
                                </div>

                                {/* Video Box */}
                                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                                    <div className="w-full max-w-xs md:max-w-sm lg:max-w-md aspect-[9/16] rounded-3xl overflow-hidden bg-slate-300 shadow-lg">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${currentTestimony.videoId}?rel=0`}
                                            title={`Testimonio ${currentTestimony.id}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Arrow */}
                            <button
                                onClick={handleNext}
                                className="p-3 rounded-full bg-[#D4AF37] hover:bg-[#C4A02F] transition-colors shadow-lg flex-shrink-0"
                                aria-label="Siguiente testimonio"
                            >
                                <ChevronRightIcon className="w-6 h-6 text-black" />
                            </button>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex items-center justify-center gap-3 mt-12">
                            {testimonies.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        index === currentIndex
                                            ? "bg-[#D4AF37] w-8"
                                            : "bg-slate-300"
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