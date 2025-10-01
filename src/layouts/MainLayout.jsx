import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

export default function MainLayout(){
    return(
        <>
            <header className="px-[40px] items-center py-4  mx-auto w-2/3 flex gap-4">
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