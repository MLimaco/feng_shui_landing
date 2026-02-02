import React from "react";

const Description: React.FC = () => {
    return (
        <section className="relative w-full bg-white">
            {/* Top Motif */}
            <img
                src="/images/motiv/motiv.webp"
                alt=""
                aria-hidden
                className="w-full h-auto object-cover opacity-50"
            />

            <div className="py-16 md:py-20 lg:py-24">
                <div className="mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1400 }}>
                    <div className="w-full text-center">
                        <p className="mt-6 max-w-5xl mx-auto text-black text-lg md:text-2xl lg:text-3xl leading-snug">
                            ¿Inviertes tiempo, esfuerzo y dinero en tu negocio, pero te sientes{" "}
                            <span className="font-bold text-[#D4AF37]">
                                estancado, agotado e inestable financieramente?
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Motif */}
            <img
                src="/images/motiv/motiv.webp"
                alt=""
                aria-hidden
                className="w-full h-auto object-cover opacity-50"
            />
        </section>
    );
};

export default Description;