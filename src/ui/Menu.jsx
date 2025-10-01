import Deliver from '../assets/deliver.jpg'
export function Menu({name,description,price,image}){
  return(
    <div className="w-[265px] h-[380px] bg-[#EDEFEE] overflow-hidden rounded-t-lg">
        <img className="w-full h-[172px]" src={image} />
        <div className="flex gap-2 p-2 items-center"> 
            <h2 className="font-markazi text-[14pt] font-bold flex-1">{name}</h2>
            <span>{price}</span>
        </div>
        <p className="font-karla text-[12pt] px-2 h-[70px] my-2">{description}</p>
        <div className="flex gap-2 px-2 pt-4">
            <h3 className="font-markazi font-semibold">Order a delivery</h3>
            <img src={Deliver} width="24" />
        </div>
    </div>
  )
}