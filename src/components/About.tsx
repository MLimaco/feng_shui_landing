import React from "react";

const About: React.FC = () => {
    return (
        <section
            className="relative w-full py-16 md:py-20 lg:py-24"
            style={{
                background: "linear-gradient(to right, #000000, #4b5563)",
            }}
            aria-label="Acerca de Giancarlo Chen"
        >
            
            <div className="mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1400 }}>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden">
                            <img
                                src="/images/about/about.webp"
                                alt="Giancarlo Chen"
                                className="w-full h-auto object-cover"
                            />
                            {/* Decorative dots - left */}
                            <div className="absolute left-0 top-1/4 -translate-x-8 flex flex-col gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                            </div>
                            {/* Decorative dots - right */}
                            <div className="absolute right-0 top-1/3 translate-x-8 flex flex-col gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="order-1 lg:order-2">
                        {/* Mobile overlay background */}
                        <div className="lg:hidden absolute inset-0 bg-slate-700/60 rounded-2xl -z-10" />
                        
                        <div className="text-white space-y-6 lg:space-y-8 p-6 lg:p-0">
                            <div>
                                <p className="text-[#D4AF37] text-lg md:text-2xl lg:text-3xl mb-2">
                                    Fundador | Mentor
                                </p>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                    Giancarlo Chen
                                </h2>
                            </div>

                            <p className="text-lg md:text-2xl lg:text-3xl leading-tight text-slate-100 text-justify">
                                A mis 19 años, la ansiedad, las migrañas y los problemas digestivos, eran mi principal señal de desconexión con mi cuerpo. <span className="font-bold">hasta que descubrí el entrenamiento del kung fu, la meditación y el qi gong con mi maestro.</span>
                            </p>

                            <p className="text-lg md:text-2xl lg:text-3xl leading-tight text-slate-100 text-justify">
                                Luego, a los 37, tras una grave lesión que me impedía continuar con mis hábitos y reduciendo el alto rendimiento con mis negocios, <span className="font-bold">volví a aplicar lo aprendido y conseguí liberarme de esos síntomas en cuestión de semanas.</span>
                            </p>

                            <p className="text-lg md:text-2xl lg:text-3xl leading-tight text-slate-100 text-justify">
                                Hoy en día mi propósito es <span className="text-[#D4AF37] font-bold">guiar a profesionales a recuperar su fuerza, su salud y alinear su vida para alcanzar su máximo potencial.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;