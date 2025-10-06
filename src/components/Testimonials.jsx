import Testimonial from "../ui/Testimonial"
import Avatar1 from "../assets/avatar1.jpg"
import Avatar2 from "../assets/avatar2.jpg"
import Avatar3 from "../assets/avatar3.jpg"
import Avatar4 from "../assets/avatar4.jpg"

export default function Testimonials(){
    const testimonials = [
        {
            profil: "profil1",
            rating: 5,
            review: "review 1",
            image: Avatar1
        },
          {
            profil: "profil2",
            rating: 4,
            review: "review 2",
            image: Avatar2
        },
          {
            profil: "profil3",
            rating: 3,
            review: "review 3",
            image: Avatar3
        },
          {
            profil: "profil4",
            rating: 4,
            review: "review 4",
            image: Avatar4
        }

    ]
    return(
      <>
      
       <section className=" sm:py-4 sm:mt-[60px]">
                <div className="lg:w-2/3 px-4 sm:mx-auto lg:px-[40px] py-[25px]">
                   
                    <h1 className="font-markazi font-bold text-center text-[30pt] py-2"> Testimonials</h1>
                    <section className="sm:grid sm:grid-cols-4 sm:justify-between sm:mt-[40px]">
                                     {testimonials.map( testimonial => <Testimonial key={testimonial.profil} {...testimonial} />)}
                    </section>
                </div>
            </section>
              
      
      </>
          
    )
}