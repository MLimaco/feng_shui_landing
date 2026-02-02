import React from "react";

const Inquiries: React.FC = () => {

    return (
            <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFEEB3] to-[#D4AF37] py-16 md:py-20 lg:py-24">
            {/* Background Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-between pointer-events-none">
                <div className="flex flex-col items-center justify-center pt-8 md:pt-12 lg:pt-16">
                    <h1 className="font-serif tracking-tight leading-tight text-[3.6rem] md:text-[5rem] lg:text-[7rem] xl:text-[8.5rem] text-center text-[#8B6914] opacity-10">
                        FENG SHUI
                    </h1>
                </div>
                <div className="w-full flex justify-center pb-0">
                    <img
                        src="/images/inquiries/i_vector.webp"
                        alt="Vector decorativo"
                        className="w-80 md:w-[32rem] lg:w-[48rem] xl:w-[56rem] opacity-25 pointer-events-none object-contain"
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1200 }}>
                <div className="w-full text-center space-y-8">
                    {/* Main Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                    Tu entorno influye directamente en tus decisiones, tu crecimiento financiero y tu salud                    
                    </h2>

                    {/* Description */}
                    <p className="max-w-6xl mx-auto text-lg md:text-2xl lg:text-3xl leading-relaxed text-black">
                    Al ajustar tu espacio mediante Feng Shui y Astrología China; este potencia tu claridad, tu mente, tu estabilidad financiera y consigues resultados sostenibles.                    
                    </p>

                    {/* Button and Counter */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                        <button
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#5C4033] to-[#4A2F24] px-6 py-3 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform duration-200"
                            aria-label="Solicita una consultoría privada"
                        >
                            SOLICITA UNA CONSULTORÍA PRIVADA
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inquiries;