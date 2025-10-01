import { Link } from "react-router";

export default function Footer(){
    return(
                <section className="py-4  bg-[#495E59]  mt-[60px]">
                <div className="w-2/3 mx-auto px-[40px] py-[25px]  flex gap-10 ">
                     <div className="w-[270px] h-[273px] bg-white"> </div>
                     <div className="flex  flex-1 gap-10">
                        <div className="flex-1">
                            <h1 className="font-semibold">Navigation</h1>
                            <nav>
                                <ul>
                                   <li className="hover:text-[#F4CE14]"><Link to="/">Home</Link></li>
                                   <li className="hover:text-[#F4CE14]"><Link to="about">About</Link></li>
                                   <li className="hover:text-[#F4CE14]"><Link to="menu">Menu</Link></li>
                                   <li className="hover:text-[#F4CE14]"><Link to="reservations">Reservations</Link></li>
                                   <li className="hover:text-[#F4CE14]"><Link to="booking">Order online</Link></li>
                                   <li className="hover:text-[#F4CE14]"><Link to="login">Login</Link></li>
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