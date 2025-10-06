import Deliver from '../assets/deliver.jpg'
export function Menu({name,description,price,image}){
  return(
    <>
       <div className="max-sm:hidden bg-[#EDEFEE] w-[210px] overflow-hidden rounded-t-lg">
        <img className=" w-full h-[130px]" src={image} />
        <div className="flex gap-2 p-2 items-center"> 
            <h2 className="font-markazi text-[14pt] font-bold flex-1">{name}</h2>
            <span>{price}</span>
        </div>
        <p className="font-karla text-[10pt] px-2 my-2">{description}</p>
        <div className="flex gap-2 px-2 pt-4">
            <h3 className="font-markazi font-semibold">Order a delivery</h3>
            <img src={Deliver} width="24" />
        </div>
    </div>
      <div className="sm:hidden flex border-b bg-[#EDEFEE] border-[#e5ebe8] items-center p-4">
       
          <div className="flex-1 ">
           <h2 className="font-karla text-[16pt] font-bold">{name}</h2>
               <p className="font-karla text-[12pt]">{description}</p>
               <p className="font-karla text-[10pt] font-semibold">{price}</p>
           <div className="flex gap-2 items-center">
              <h3 className="font-karla text-[10pt] ">Order a delivery</h3>
              <img src={Deliver} width="24" />
           </div>
          </div>
         <img className=" w-[100px] h-[85px]"  src={image} />
    </div>
    
    </>
 
  )
}