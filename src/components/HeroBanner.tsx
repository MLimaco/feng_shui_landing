import React, { useEffect, useState } from "react";

const HeroBanner: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                backgroundImage: "url('/images/herobanner/background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            aria-label="Hero banner Feng Shui"
        >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* decorative vector */}
            <img
                src="/images/herobanner/vector.svg"
                alt=""
                aria-hidden
                className="pointer-events-none select-none absolute inset-0 m-auto w-[1200px] max-w-none opacity-30 mix-blend-screen"
                style={{ transform: "translateZ(0)" }}
            />

            <div className="relative z-10 mx-auto px-6 py-20 flex items-center justify-center"
                 style={{ maxWidth: 1200 }}>
                <div className="w-full text-center">
                    <h1
                        className={`font-serif tracking-tight leading-tight text-[3.6rem] md:text-[5rem] lg:text-[7rem] xl:text-[8.5rem] text-center text-[#E6C67A] drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)] transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    >
                        FENG SHUI
                    </h1>

                    <p className={`mt-6 max-w-3xl mx-auto text-white text-lg md:text-2xl lg:text-3xl leading-relaxed transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Feng Shui Estratégico y Astrología China para <span className="font-semibold">Fundadores y Dueños de Negocio</span>
                    </p>

                    <p className={`mt-6 max-w-2xl mx-auto text-slate-200 text-sm md:text-base lg:text-lg px-6 transition-all duration-900 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                        Optimiza tu entorno y el momento adecuado para tomar mejores decisiones, estabilizar tu negocio y expandir prosperidad con precisión
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-4">
                        <button
                            onClick={() => setClicks(c => c + 1)}
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#F3D78A] to-[#D4AF37] px-6 py-3 text-black font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform duration-200"
                            aria-label="Solicita una consultoría privada"
                        >
                            SOLICITA UNA CONSULTORÍA PRIVADA
                        </button>

                        {/* click counter (simple) */}
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-white text-sm select-none">
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                                <path d="M9 2a1 1 0 00-1 1v1H6a2 2 0 00-2 2v1h12V7a2 2 0 00-2-2h-2V3a1 1 0 00-1-1H9zM5 11v3a4 4 0 004 4h2a4 4 0 004-4v-3H5z" />
                            </svg>
                            <span className="font-medium">{clicks}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* subtle bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E6C67A]/60 to-transparent opacity-60" />
        </section>
    );
};

export default HeroBanner;