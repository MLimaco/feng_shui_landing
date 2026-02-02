import React from "react";
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="relative w-full bg-black border-t-4 border-[#D4AF37]">
            <div className="mx-auto px-6 flex items-center justify-center" style={{ maxWidth: 1200 }}>
                <div className="w-full flex flex-col items-center justify-center space-y-8">
                    {/* Logo and Brand */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <img
                            src="/images/footer/logo.webp"
                            alt="Gian Chen Logo"
                            className="w-60 h-60 md:w-60 md:h-60 lg:w-100 lg:h-100 object-contain"
                        />
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center justify-center gap-6 md:gap-8">
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-slate-600 text-slate-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                            aria-label="YouTube"
                        >
                            <FaYoutube className="w-6 h-6 md:w-7 md:h-7" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-slate-600 text-slate-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="w-6 h-6 md:w-7 md:h-7" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-slate-600 text-slate-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-6 h-6 md:w-7 md:h-7" />
                        </a>
                        <a
                            href="https://tiktok.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-slate-600 text-slate-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                            aria-label="TikTok"
                        >
                            <FaTiktok className="w-6 h-6 md:w-7 md:h-7" />
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mt-8" />

                    {/* Copyright */}
                    <p className="text-center text-xs md:text-sm lg:text-base text-slate-500">
                        © 2024 Gian Chen. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;