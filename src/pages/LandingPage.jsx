import AboutSection from "./Section/AboutSection";
import BenefitSection from "./Section/BenefitSection";
import EffectSection from "./Section/EffectSection";
import HomeSection from "./Section/HomeSection";
import ServiceSection from "./Section/ServiceSection";
const LandingPage = () => {
    return (
        <>
            <HomeSection/>
            <div className="page-content">
                <AboutSection/>
                <EffectSection/>
                <ServiceSection/>
                <BenefitSection/>
            </div>
        </>
    );
}

export default LandingPage;