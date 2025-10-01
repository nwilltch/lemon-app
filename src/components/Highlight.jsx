import Button from "../ui/Button";
import Dessert from  '../assets/dessert.jpg'
import Salad from  '../assets/salad.jpg'
import Cake from  '../assets/cake.jpg'
import { Menu } from "../ui/Menu";

export default function Hightlight(){
    const menus = [
        {
            name:"Greek Salad",
            description:"Tres bonne salade, respectant la recette ancestrale, servie avec une baguette francaise",
            price:"$12.99",
            image: Salad
        },
          {
            name:"Bruchetta",
            description:"Delice culinaire, respectant la recette ancestrale, servie avec une main de tomates fraiches",
            price:"$5.99",
            image: Cake
        },
          {
            name:"Lemon dessert",
            description:"Dessert signature, respectant la recette ancestrale, servie avec une gelee de citron",
            price:"$5.00",
            image: Dessert
        },
    ]
    return(
         <section className="py-4">
                   <div className="w-2/3 mx-auto px-[40px] py-[25px] h-[448px] gap-10">
                        <div className="flex items-center">
                            <h1 className="flex-1 font-markazi font-bold text-[30pt]"> This week specials</h1>
                            <Button>Online Menu</Button>
                        </div>
                        <section className="grid grid-cols-3 justify-between">
                             {menus.map( menu => <Menu {...menu} />)}
                        </section>
                   </div>
               </section>
    )
}