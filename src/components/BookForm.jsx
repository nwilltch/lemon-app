import { useState } from "react"

export  default function BookForm(){
    const [booking , setBooking] = useState({
        date:'',
        occasion:'',
        guest:1,
        time:''
    })
    const [availableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00","23:00"])
    function handleChange(e){
          setBooking((prev) => ({...prev,[e.target.name]:e.target.value}))
    }
    return(
        <form className="mx-auto w-[500px]">
    <section className="flex gap-2 p-2 my-6">
         <label className="w-[200px] " htmlFor="res-date">Choose date</label>
         <input className="flex-1" name="date" type="date" id="res-date" value={booking.date} onChange={handleChange} />
    </section>        
  
   <section  className="flex gap-2 p-2  my-6">
       <label className="w-[200px]" htmlFor="res-time">Choose time</label>
      <select className="flex-1" name="time" id="res-time" value={booking.time} onChange={handleChange}>
        {availableTimes.map(t => (<option key={t}>{t}</option>))}
     </select>
   </section>

   <section  className="flex gap-2 p-2  my-6">
     <label className="w-[200px] " htmlFor="guests">Number of guests</label>
    <input className="flex-1" type="number" placeholder="1" min="1" max="10" id="guests" value={booking.guest} name="guest" onChange={handleChange} />
   </section>

   <section  className="flex gap-2 p-2  my-6">
       <label className="w-[200px]" htmlFor="occasion">Occasion</label>
      <select className="flex-1" id="occasion" name="occasion" value={booking.occasion} onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Achievement</option>
     </select>
   </section>

   <input className="p-2 bg-[#F4CE14] my-[40px] rounded-md" type="submit" value="Make Your reservation" />
  </form>
    )
}