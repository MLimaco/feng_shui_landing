import HeroBanner from "../components/HeroBanner";
import Description from "../components/Description";
import Information from "../components/Information";
import Objectives from "../components/Objectives";
import Functions from "../components/Functions";
import Testimonies from "../components/Testimonies.tsx";
import Inquiries from "../components/Inquiries.tsx";

export default function HomeView() {
    return (
        <div>
            <main>
                <HeroBanner />
                <Description />
                <Information />
                <Objectives />
                <Functions />
                <Testimonies />
                <Inquiries />
            </main>
        </div>
    );
}