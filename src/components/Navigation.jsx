import { Link } from "react-router";

export default function Navigation(){
    return(
        <nav className="flex-1">
            <ul className="flex gap-4 items-center text-[20pt] text-[#495E59] font-markazi justify-around">
                <li className="hover:text-[#F4CE14]"><Link to="/">Home</Link></li>
                <li className="hover:text-[#F4CE14]"><Link to="about">About</Link></li>
                <li className="hover:text-[#F4CE14]"><Link to="menu">Menu</Link></li>
                <li className="hover:text-[#F4CE14]"><Link to="reservations">Reservations</Link></li>
                <li className="hover:text-[#F4CE14]"><Link to="booking">Order online</Link></li>
                <li className="hover:text-[#F4CE14]"><Link to="login">Login</Link></li>
            </ul>
        </nav>
    )
}