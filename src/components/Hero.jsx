import Button from "../ui/Button";
import Dish from "../assets/restaufood.jpg"
export default function Hero(){
    return(
        <section className="bg-[#395E59] py-4">
            <div className="w-2/3 mx-auto px-[40px] py-[50px] flex h-[448px] gap-10">
                 <div className="w-1/2">
                    <h1 className="text-[#F4CE14] font-markazi text-[40pt]">Litte Lemon</h1>
                    <h2 className="-mt-[30px] text-white font-markazi text-[30pt]">Quebec</h2>
                    <p className="pt-[30px] font-karla pb-[60px] w-[400px] text-white">Nous sommes un estaurant mediteraneen, proposant des plats issus des recettes anciennes, ajustes avec un zeste de modernite.</p>
                     <Button >Book a table</Button>
                 </div>
                 <img src={Dish}  className="w-[367px]  rounded-lg ml-auto h-[442px] aspect-2/3" />
            </div>
        </section>
    )
}