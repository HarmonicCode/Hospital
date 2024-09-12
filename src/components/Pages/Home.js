import "../../App.css";
import IntroSection from '../IntroSection';  // Correct path from pages to components
import Cards from "../Cards";


function Home(){
    return (
        <>
        <IntroSection />
        <Cards />
        </>
    );
}

export default Home;