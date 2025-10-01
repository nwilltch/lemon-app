export default function Testimonial({rating, review, image,profil}){
        return(
            <div class="w-[200px] h-[188px] flex flex-col bg-white p-2">
                <span className="text-center font-markazi text-xl">{Array.from({length: rating}).map(_ => '*')}</span>
                <div className="flex gap-2 items-center">
                    <img className="rounded-full" src={image} width="60" />
                    <span>{profil}</span>
                </div>
                <p className="py-2">{review}</p>
            </div>
        )
}