import Button from "../ui/Button";
import Dish from "../assets/restaufood.jpg"
import { Link } from "react-router";
export default function Hero(){
    return(
        <section className="bg-[#395E59] py-4">
            <div className="lg:w-2/3 mx-auto px-[40px] py-[50px]  flex  gap-10">
                 <div className=" w-1/2">
                    <h1 className="text-[#F4CE14] font-markazi text-[40pt]">Little Lemon</h1>
                    <h2 className="-mt-[30px] text-white font-markazi text-[30pt]">Quebec</h2>
                    <p className="pt-[30px] font-karla pb-[60px]   text-white">Nous sommes un estaurant mediteraneen, proposant des plats issus des recettes anciennes, ajustes avec un zeste de modernite.</p>
                    <Link to="/booking" ><Button >Book a table</Button></Link> 
                 </div>
                 <img src={Dish}  className="  rounded-lg  h-[400px]" />
            </div>
        </section>
    )
}