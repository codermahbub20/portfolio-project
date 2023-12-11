import About from "../Pages/About/About";
import Banner from "../Pages/Banner/Banner";
import Contact from "../Pages/Contact/Contact";
import Education from "../Pages/Education/Education";
import Footer from "../Pages/Footer/Footer";
import Projects from "../Pages/Projects/Projects";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Skills from "../Pages/Skills/Skills";


const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;