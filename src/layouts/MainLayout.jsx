import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import HMenu from "../assets/hamburger_menu.svg"
import Basket from "../assets/Basket.svg"
export default function MainLayout(){
    return(
        <>
        <header className="lg:w-2/3 mx-auto  overflow-hidden">  
            <nav className="px-4   items-center py-4 flex gap-4 items-center justify-between text-[#495E59]">
                <img src={HMenu}  className="block sm:hidden w-6" />
                <Logo />
                <Navigation />
                <img src={Basket}  className="block  w-6" />
            </nav>
        </header>
          
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}