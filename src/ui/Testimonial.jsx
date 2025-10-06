export default function Testimonial({rating, review, image,profil}){
        return(
            <>
            
             <section className="max-sm:hidden w-[200px] h-[188px] flex flex-col bg-white p-2">
                <span className="p-1 font-markazi text-xl">{Array.from({length: rating}).map(_ => '⭐')}</span>
                <div className="flex gap-2 items-center">
                    <img className="rounded-full border" src={image} width="60" />
                    <span>{profil}</span>
                </div>
                <p className="py-2">{review}</p>
            </section>
               <section className="sm:hidden bg-gray-50 flex gap-2 items-center  my-1 p-2 rounded-md hover:shadow-sm">
                    <img className="rounded-full  w-8 h-8" src={image} />
                 <div className="flex flex-col p-2">
                   <span className="text-center font-markazi text-xl">{Array.from({length: rating}).map(_ => '*')}</span>
                   <span>{profil}</span>
                   <p className="py-2">{review}</p>
                </div>  
            </section>
            
            </>
           
        )
}