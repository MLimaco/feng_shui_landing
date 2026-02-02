import React from "react";

const Information: React.FC = () => {
    
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-black via-slate-800 to-slate-600 py-16 md:py-20 lg:py-24"
            style={{
                backgroundImage: "url('/images/information/info_background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            aria-label="Info Banner Feng Shui"
        >
            <div className="mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1200 }}>
                <div className="w-full grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left text-white space-y-6">

                        <p className="max-w-6xl text-lg md:text-2xl lg:text-3xl leading-relaxed">
                        Esto <span className="font-bold">se llama DESALINEACIÓN.</span>
                        </p>

                        <p className="max-w-6xl text-lg md:text-2xl lg:text-3xl leading-relaxed">
                        Lo que significa que tu entorno no está en equilibrio para brindarte un contexto más positivo hacia tus decisiones y objetivos. Ni en la frecuencia adecuada para brindarte claridad mental, salud y riqueza.                        
                        </p>

                        <p className="max-w-6xl text-lg md:text-2xl lg:text-3xl leading-relaxed">
                        Sin embargo, <span className="text-[#E6C67A] font-bold">cuando tu casa y/o negocio se armonizan,</span> se estabilizan tus finanzas y tu salud se regenera de manera natural.
                        </p>

                        <div className="pt-4 flex items-center gap-4">
                            <button
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#F3D78A] to-[#D4AF37] px-6 py-3 text-black font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-transform duration-200"
                                aria-label="Solicita una consultoría privada"
                            >
                                SOLICITA UNA CONSULTORÍA PRIVADA
                            </button>
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