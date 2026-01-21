import React, { useState } from "react";

const Information: React.FC = () => {
    const [clicks, setClicks] = useState(0);

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-black via-slate-800 to-slate-600 py-16 md:py-20 lg:py-24">
            <div className="mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1200 }}>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-6">
                        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                            <span className="text-[#E6C67A] font-semibold">Hablemos claro, tus finanzas y tus negocios no van mal por falta de trabajo duro.</span>
                        </p>

                        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                            No es la estrategia comercial, tampoco es que requiera más tiempo y esfuerzo.
                        </p>

                        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                            <span className="text-[#E6C67A] font-semibold">Esto va más allá; se llama DESALINEACIÓN.</span> Lo cual significa que tu entorno y el momento aún no están en equilibrio para brindar un contexto más positivo hacia tus decisiones.
                        </p>

                        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                            Y cuando lo están, la claridad y la estabilidad regresan de forma natural.
                        </p>

                        <div className="pt-4 flex items-center gap-4">
                            <button
                                onClick={() => setClicks(c => c + 1)}
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#F3D78A] to-[#D4AF37] px-6 py-3 text-black font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform duration-200"
                                aria-label="Solicita una consultoría privada"
                            >
                                SOLICITA UNA CONSULTORÍA PRIVADA
                            </button>

                            {/* click counter */}
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-white text-sm select-none">
                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                                    <path d="M9 2a1 1 0 00-1 1v1H6a2 2 0 00-2 2v1h12V7a2 2 0 00-2-2h-2V3a1 1 0 00-1-1H9zM5 11v3a4 4 0 004 4h2a4 4 0 004-4v-3H5z" />
                                </svg>
                                <span className="font-medium">{clicks}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image - Desktop only */}
                    <div className="hidden lg:flex justify-center lg:justify-end">
                        <img
                            src="/images/information/infoImage.webp"
                            alt="Consultor Feng Shui"
                            className="w-full max-w-sm lg:max-w-md object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Information;