import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

export default function MainLayout(){
    return(
        <>
            <header>
                <Logo />
                <Navigation />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}