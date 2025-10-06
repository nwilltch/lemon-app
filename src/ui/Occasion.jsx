 import { FaGlassCheers } from 'react-icons/fa';
 import { BiChevronDown } from 'react-icons/bi';
 import { BiChevronUp } from 'react-icons/bi';
 import { FaCheck } from 'react-icons/fa6';
import { useState } from 'react';
export default function Occasion({field,form: {touched, errors, values, handleChange}, ...props}){
    const [open, setOpen] = useState(false)
    const handleClick =(e)=>{
        if( !touched[field.name]){
            touched[field.name] = true
        }
        e.stopPropagation();
        setOpen(prev => {
               if(!prev){
                  handleChange({target:{value:values[field.name],name:field.name}})
               }
            return !prev
        })
    }
    const options = ["Birthday","Anniversary","Engangement","Achievement"]
    return(
        <div className="p-2 relative">
            <div onClick={handleClick} className={`border flex  pointer-cursor items-center gap-4 p-2 rounded-md  border-[#CBCDCC]  ${values[field.name] ? 'bg-[#495E59] text-[#EDEFEE]' : 'text-[#495E59] bg-[#EDEFEE]'}`}>
               {!values[field.name] && <FaGlassCheers /> }
               <div className="font-semibold flex-1">{values[field.name] || 'Ocassion'}</div>
               {open && <BiChevronDown  className="cursor-pointer" onClick={handleClick}/>} 
               {!open && <BiChevronUp  className="cursor-pointer" onClick={handleClick} />}
            </div>
             { open &&
             <div className="absolute bg-white w-[calc(100%-1rem)] shadow-md">
                {options.map(option => <OccasionOption setOpen={setOpen} handleChange={handleChange} name={field.name} isCurrent={option === values[field.name]} key={option} value={option} />)}
             </div>}
        </div>
    )
}

function OccasionOption({value,name,isCurrent,setOpen,handleChange}){
     return(
        <> 
        <div onClick={()=>{setOpen(false) ; handleChange({target:{value,name}})}} className="pl-10 pr-2 font-semibold items-center py-2 flex gap-2 text-[#495E59] hover:bg-[#495E59] hover:text-[#EDEFEE] bg-[#EDEFEE] border-b border-[#CBCDCC] ">
            <span className="flex-1">{value}</span>
            {isCurrent && <FaCheck  size={12}/> }
        </div>
        </>
      
     )
}