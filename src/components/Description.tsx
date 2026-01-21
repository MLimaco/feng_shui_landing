import React from "react";

const Description: React.FC = () => {
    return (
        <section className="relative w-full bg-white py-16 md:py-20 lg:py-24">
            <div className="mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1200 }}>
                <div className="w-full text-center">
                    <p className="max-w-3xl mx-auto text-black text-lg md:text-2xl lg:text-3xl leading-relaxed">
                        Tu negocio es fruto de tu esfuerzo, disciplina y decisiones importantes que impactan positivamente en las personas.
                    </p>

                    <p className="mt-6 max-w-3xl mx-auto text-black text-lg md:text-2xl lg:text-3xl leading-relaxed">
                        Sin embargo, <span className="font-semibold text-[#D4AF37]">hay algo que no termina de encajar.</span> <span className="font-semibold">¿Verdad?</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Description;