import AboutSection from "./Section/AboutSection";
import BenefitSection from "./Section/BenefitSection";
import EffectSection from "./Section/EffectSection";
import HomeSection from "./Section/HomeSection";
import ServiceSection from "./Section/ServiceSection";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Hub } from "aws-amplify";

function LandingPage (){

    const navigator = useNavigate();

    useEffect(() => {
        Hub.listen('auth', ({ payload: { event, data } }) => {
          switch (event) {
            case 'signIn':
            case 'cognitoHostedUI':
              navigator("/dashboard");
              break;
            case 'signOut':
              navigator("/login");
              break;
            case 'signIn_failure':
            case 'cognitoHostedUI_failure':
              console.log('Sign in failure', data);

              break;
            default:
              break;
          }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

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