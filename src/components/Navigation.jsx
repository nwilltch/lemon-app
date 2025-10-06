import { Link } from "react-router";

export default function Navigation(){
    return(
        <>
            
                <span className="hidden sm:block hover:text-[#F4CE14]"><Link to="/">Home</Link></span>
                <span className="hidden sm:block hover:text-[#F4CE14]"><Link to="about">About</Link></span>
                <span className="hidden sm:block hover:text-[#F4CE14]"><Link to="menu">Menu</Link></span>
                <span className="hidden sm:block hover:text-[#F4CE14]"><Link to="reservations">Reservations</Link></span>
                <span className="hidden sm:block hover:text-[#F4CE14]"><Link to="booking">Order online</Link></span>
                <span className="hidden sm:block hover:text-[#F4CE14]"><Link to="login">Login</Link></span>
            
        </>
    )
}