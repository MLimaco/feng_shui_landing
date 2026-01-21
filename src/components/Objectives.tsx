import React from "react";
import { LightBulbIcon, CurrencyDollarIcon, ArrowTrendingUpIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Objectives: React.FC = () => {
    return (
        <section className="relative w-full bg-black py-16 md:py-20 lg:py-24">
            <div className="mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1200 }}>
                <div className="w-full space-y-16 md:space-y-20">
                    {/* Title */}
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Objetivos de la Consultoría
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <div className="border border-slate-700 rounded-2xl p-6 md:p-8 bg-black/40 backdrop-blur-sm hover:border-[#E6C67A]/30 transition-colors duration-300">
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-b from-[#F3D78A] to-[#D4AF37] rounded-full p-4">
                                    <LightBulbIcon className="w-8 h-8 text-black" />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                                Claridad en las decisiones
                            </h3>
                            <p className="text-sm md:text-base text-slate-300 text-center">
                                Tu entorno favorece enfoque, perspectiva y decisiones estratégicas más claras.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-slate-700 rounded-2xl p-6 md:p-8 bg-black/40 backdrop-blur-sm hover:border-[#E6C67A]/30 transition-colors duration-300">
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-b from-[#F3D78A] to-[#D4AF37] rounded-full p-4">
                                    <CurrencyDollarIcon className="w-8 h-8 text-black" />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                                Estabilidad del negocio
                            </h3>
                            <p className="text-sm md:text-base text-slate-300 text-center">
                                Reduce fricción, inestabilidad y presión innecesaria en tu trabajo y tus finanzas.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-slate-700 rounded-2xl p-6 md:p-8 bg-black/40 backdrop-blur-sm hover:border-[#E6C67A]/30 transition-colors duration-300">
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-b from-[#F3D78A] to-[#D4AF37] rounded-full p-4">
                                    <ArrowTrendingUpIcon className="w-8 h-8 text-black" />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                                Crecimiento sostenible
                            </h3>
                            <p className="text-sm md:text-base text-slate-300 text-center">
                                Crea condiciones para resultados constantes, no solo esfuerzo continuo.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border border-slate-700 rounded-2xl p-6 md:p-8 lg:p-10 bg-black/40 backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                    ¿Para quién es este servicio?
                                </h3>
                            </div>

                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-start gap-4">
                                    <CheckCircleIcon className="w-6 h-6 text-[#E6C67A] flex-shrink-0 mt-1" />
                                    <p className="text-sm md:text-base text-white">
                                        Fundadores y dueños de negocio que toman decisiones clave
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <CheckCircleIcon className="w-6 h-6 text-[#E6C67A] flex-shrink-0 mt-1" />
                                    <p className="text-sm md:text-base text-white">
                                        Profesionales que sienten que su espacio ya no los sostiene
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <CheckCircleIcon className="w-6 h-6 text-[#E6C67A] flex-shrink-0 mt-1" />
                                    <p className="text-sm md:text-base text-white">
                                        Personas que valoran claridad, precisión y estabilidad a largo plazo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Objectives;