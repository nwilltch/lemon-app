import Duo from '../assets/duo.jpg'
import Chef from '../assets/chef.jpg'
export default function About(){
    return(
         <section className="py-4  bg-[#EDEFEE]">
                       <div className="lg:w-2/3 mx-auto px-[40px] py-[25px]  lg:items-center lg:flex gap-10">
                            <div className="lg:w-1/2">
                                <h1 className=" font-markazi text-[40pt]">Little Lemon</h1>
                                <h2 className="-mt-[30px]  font-markazi text-[30pt]">Quebec</h2>
                                <p className="py-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestieenim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-2">
                                <img src={Duo} className="w-[200px] h-[170px]"   />
                                <img src={Chef} className="w-[200px] h-[170px]"  />
                            </div>
                            
                       </div>
                   </section>
    )
}