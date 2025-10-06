import { useLocation } from "react-router"


export default function BookingConfirmedPage(){
    const {state} = useLocation()
  
    return(
        <> 
        <section className="w-2/3  p-8 mx-auto">
            <h1 className="font-karla text-[20pt] font-bold py-4">Confirmation of your booking</h1>
            <p className="font-karla text-[12pt] py-1">{`For ${state.occasion}, You have reserved a table for ${state.guest} people at ${state.time} on ${state.date}.`}</p>
            <p className="text-[#495E59]"><u>Save in your calender</u></p>
            <p className="font-karla text-[12pt] font-semibold py-4">Little Lemon thanks you for your reservation </p>
         </section> 
        </>
        
       
    )
}