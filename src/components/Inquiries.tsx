import React, { useState } from "react";

const Inquiries: React.FC = () => {
    const [clicks, setClicks] = useState(0);

    return (
            <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFEEB3] to-[#D4AF37] py-16 md:py-20 lg:py-24">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="font-serif tracking-tight leading-tight text-[3.6rem] md:text-[5rem] lg:text-[7rem] xl:text-[8.5rem] text-center text-[#8B6914] opacity-10">
                    FENG SHUI
                </h1>
            </div>

            <div className="relative z-10 mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1200 }}>
                <div className="w-full text-center space-y-8">
                    {/* Main Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                        Tu entorno influye directamente en cómo piensas, decides y avanzas.
                    </h2>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed text-black">
                        Al ajustar tu hogar, oficina y el momento adecuado mediante Feng Shui y Astrología China, tu espacio puede empezar a favorecer claridad, estabilidad y resultados sostenidos.
                    </p>

                    {/* Button and Counter */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <button
                            onClick={() => setClicks(c => c + 1)}
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#5C4033] to-[#4A2F24] px-6 py-3 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform duration-200"
                            aria-label="Solicita una consultoría privada"
                        >
                            SOLICITA UNA CONSULTORÍA PRIVADA
                        </button>

                        {/* click counter */}
                        <div className="flex items-center gap-2 bg-black/10 px-3 py-2 rounded-full text-black text-sm select-none">
                            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                                <path d="M9 2a1 1 0 00-1 1v1H6a2 2 0 00-2 2v1h12V7a2 2 0 00-2-2h-2V3a1 1 0 00-1-1H9zM5 11v3a4 4 0 004 4h2a4 4 0 004-4v-3H5z" />
                            </svg>
                            <span className="font-medium">{clicks}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inquiries;