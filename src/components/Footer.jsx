import { Link } from "react-router";
import LogoSrc from '../assets/logo.svg'
export default function Footer(){
    return(
                <section className="py-4  bg-[#d0dddb]">
                <div className="lg:w-2/3 mx-auto px-[40px] py-[25px]  lg:flex gap-10 ">
                     <div className="py-2"><img src={LogoSrc} /></div>
                     <div className="flex  flex-1 gap-10">
                        <div className="flex-1">
                            <h1 className="font-semibold">Navigation</h1>
                            <nav>
                                <ul>
                                   <li className="hover:underline"><Link to="/">Home</Link></li>
                                   <li className="hover:underline"><Link to="about">About</Link></li>
                                   <li className="hover:underline"><Link to="menu">Menu</Link></li>
                                   <li className="hover:underline"><Link to="reservations">Reservations</Link></li>
                                   <li className="hover:underline"><Link to="booking">Order online</Link></li>
                                   <li className="hover:underline"><Link to="login">Login</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex-1">
                            <h1 className="font-semibold">Contact</h1>
                            <ul>
                                    <li>Adresse</li>
                                    <li>Email</li>
                                    <li>Telephone</li>
                                </ul>
                        </div>
                        <div className="flex-1">
                            <h1 className="font-semibold">Social networks</h1>
                            <ul>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                </ul>
                        </div>
                     </div>
                </div>
              </section>
    )
}