import "../../App.css";
import IntroSection from '../IntroSection';  // Correct path from pages to components
import Cards from "../Cards";
import Footer from "../Footer";


function Home(){
    return (
        <>
        <IntroSection />
        <Cards />
        <Footer />
        </>
    );
}

export default Home;