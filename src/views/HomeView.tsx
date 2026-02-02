import HeroBanner from "../components/HeroBanner";
import Description from "../components/Description";
import Information from "../components/Information";
import Objectives from "../components/Objectives";
import Functions from "../components/Functions";
import About from "../components/About.tsx";
import Testimonies from "../components/Testimonies.tsx";
import Inquiries from "../components/Inquiries.tsx";
import Footer from "../components/Footer.tsx";

export default function HomeView() {
    return (
        <div>
            <main>
                <HeroBanner />
                <Description />
                <Information />
                <Objectives />
                <Functions />
                <About />
                <Testimonies />
                <Inquiries />
            </main>
            <Footer />
        </div>
    );
}