import React, { useEffect, useState } from "react";

const HeroBanner: React.FC = () => {
    const [mounted, setMounted] = useState(false);

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

            <div className="relative z-10 mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24"
                style={{ maxWidth: 1400 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <p className={`text-slate-200 text-lg md:text-2xl lg:text-3xl px-4 sm:px-6 lg:px-0 transition-all duration-900 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                            Feng Shui estratégico para fundadores y dueños de negocio
                        </p>

                        <p className={`mt-6 max-w-3xl mx-auto lg:mx-0 text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            Impulsa tu negocio y mejora tu <span className="text-[#E6C67A] font-semibold">salud y tus finanzas</span> en menos de <span className="text-[#E6C67A] font-semibold">40 días</span>
                        </p>

                        {/* Image Mobile Only - Before Button */}
                        <div className={`lg:hidden flex items-center justify-center mt-8 transition-all duration-700 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                            <img
                                src="/images/herobanner/pic.webp"
                                alt="Consultor Feng Shui"
                                className="w-full max-w-xs rounded-2xl shadow-2xl"
                            />
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start">
                            <button
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#F3D78A] to-[#D4AF37] px-6 py-3 text-black font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform duration-200 whitespace-nowrap"
                                aria-label="Solicita una consultoría privada"
                            >
                                SOLICITA UNA CONSULTORÍA PRIVADA
                            </button>
                        </div>
                    </div>

                    {/* Right Image - Desktop Only */}
                    <div className={`hidden lg:flex items-center justify-center order-1 lg:order-2 transition-all duration-700 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                        <img
                            src="/images/herobanner/pic.webp"
                            alt="Consultor Feng Shui"
                            className="w-full max-w-sm lg:max-w-md rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* subtle bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e8bf6d]/60 to-transparent opacity-60" />
        </section>
    );
};

export default HeroBanner;