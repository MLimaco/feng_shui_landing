import React from "react";
import { ClockIcon, CursorArrowRippleIcon, ChartBarIcon } from "@heroicons/react/24/solid";

const Functions: React.FC = () => {
    return (
        <section
            className="relative w-full bg-white py-16 md:py-20 lg:py-24"
            style={{
                backgroundImage: "url('/images/function/f_background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            aria-label="Cómo funciona la consultoría"
        >
            {/* overlay para mejor legibilidad */}
            <div className="absolute inset-0 bg-white/95" />

            <div className="relative z-10 mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1400 }}>
                <div className="w-full space-y-12 md:space-y-16">
                    {/* Title */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                            Cómo funciona la consultoría
                        </h2>
                    </div>

                    {/* Steps */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Step 1 */}
                        <div className="border border-slate-200 rounded-2xl p-6 md:p-8 bg-white/80 backdrop-blur-sm hover:border-[#E6C67A]/50 transition-colors duration-300">
                            <div className="flex items-start gap-6 md:gap-8">
                                <div className="flex-shrink-0 flex items-start gap-2 md:gap-3">
                                    <div className="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#E6C67A] text-black font-bold text-xs md:text-sm flex-shrink-0">
                                        1
                                    </div>
                                    <ClockIcon className="w-16 h-16 md:w-20 md:h-20 text-slate-600 flex-shrink-0" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-black mb-2">
                                        Análisis de entorno
                                    </h3>
                                    <p className="text-lg md:text-2xl lg:text-3xl text-slate-700">
                                        Revisión de tu hogar u oficina y de sectores clave.
                                    </p>
                                    <div className="mt-4 w-12 h-1 bg-[#E6C67A]" />
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="border border-slate-200 rounded-2xl p-6 md:p-8 bg-white/80 backdrop-blur-sm hover:border-[#E6C67A]/50 transition-colors duration-300">
                            <div className="flex items-start gap-6 md:gap-8">
                                <div className="flex-shrink-0 flex items-start gap-2 md:gap-3">
                                    <div className="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#E6C67A] text-black font-bold text-xs md:text-sm flex-shrink-0">
                                        2
                                    </div>
                                    <CursorArrowRippleIcon className="w-16 h-16 md:w-20 md:h-20 text-slate-600 flex-shrink-0" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-black mb-2">
                                        Ajustes estratégicos
                                    </h3>
                                    <p className="text-lg md:text-2xl lg:text-3xl text-slate-700">
                                        Recomendaciones claras alineadas con tu espacio, negocio y fecha de nacimiento.
                                    </p>
                                    <div className="mt-4 w-12 h-1 bg-[#E6C67A]" />
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="border border-slate-200 rounded-2xl p-6 md:p-8 bg-white/80 backdrop-blur-sm hover:border-[#E6C67A]/50 transition-colors duration-300">
                            <div className="flex items-start gap-6 md:gap-8">
                                <div className="flex-shrink-0 flex items-start gap-2 md:gap-3">
                                    <div className="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#E6C67A] text-black font-bold text-xs md:text-sm flex-shrink-0">
                                        3
                                    </div>
                                    <ChartBarIcon className="w-16 h-16 md:w-20 md:h-20 text-slate-600 flex-shrink-0" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-black mb-2">
                                        Integración y revisión
                                    </h3>
                                    <p className="text-lg md:text-2xl lg:text-3xl text-slate-700">
                                        Seguimiento para afinar y estabilizar los resultados.
                                    </p>
                                    <div className="mt-4 w-12 h-1 bg-[#E6C67A]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Functions;