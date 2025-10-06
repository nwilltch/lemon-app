import Button from "../ui/Button";
import Dessert from  '../assets/dessert.jpg'
import Salad from  '../assets/salad.jpg'
import Cake from  '../assets/cake.jpg'
import { Menu } from "../ui/Menu";
import Categories from "../ui/Categories";

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
                   <div className="lg:w-2/3 mx-auto">
                        <div className="sm:hidden"><Categories /></div>
                        <div className="sm:flex items-center">
                            <h1 className="sm:flex-1 font-markazi font-bold text-[30pt] p-2"> This week specials</h1>
                            <div className="hidden sm:block"><Button>Online Menu</Button></div>
                        </div>
                        <section className="sm:grid sm:grid-cols-3 justify-around">
                             {menus.map( menu => <Menu key={menu.name} {...menu} />)}
                        </section>
                   </div>
               </section>
    )
}