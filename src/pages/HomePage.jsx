import About from "../components/About";
import Hero from "../components/Hero";
import Hightlight from "../components/Highlight";
import Testimonials from "../components/Testimonials";

export default function HomePage(){
    return(
        <>
         <Hero />
         <Hightlight />
         <Testimonials />
         <About />
        </>
    )
}