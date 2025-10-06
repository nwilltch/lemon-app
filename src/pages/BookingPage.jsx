import { useState } from "react";
import BookForm from "../components/BookForm";
import { submitAPI } from "../api";
import { useNavigate } from "react-router";

export default function BookingPage(){
       let navigate = useNavigate();
      function handleSubmit(formData){
        const result = submitAPI(formData)
        if(result){
            navigate('/booking_confirmation',{state:formData})
        }
    }
    return(
        <>
         <h1 className="font-karla text-[20pt] font-bold text-center  pt-[50px]">Your online order</h1>
         <BookForm  submitForm={handleSubmit}/>
        </>
       
    )
}