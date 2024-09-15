import "../../App.css";  
import IntroSection from '../IntroSection';  
import Cards from "../Cards";
import Footer from "../Footer";
import FeaturesSection from "../FeaturesSection";


function Home() {
    return (
        <>
            <IntroSection />
            <Cards />
            <FeaturesSection />
            
            <Footer />
        </>
    );
}

export default Home;
