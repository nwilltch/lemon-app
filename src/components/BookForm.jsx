import { useReducer, useState } from "react"
import { fetchAPI, submitAPI } from "../api"
import Occasion from "../ui/Occasion"
import { validationDate, validationTime, validationOccasion, validationGuest } from "../libs/validations"
import { Field,  Form, Formik } from "formik"


export  default function BookForm({submitForm}){
 
    const updateTimes = (state,action)=>{
           if(action.name === "date"){
            const atimes = fetchAPI(new Date(action.payload))
             return  [...atimes];
           }
           return [...state]
    }
    const initializeTimes =["17:00","18:00","19:00","20:00","21:00","22:00","23:00"];
    const [availableTimes,dispatch] = useReducer(updateTimes,initializeTimes)
    function handleChange(e){
          if(e.target.name === "date"){
            dispatch({name:"date", payload: e.target.value})
          }
          setBooking((prev) => ({...prev,[e.target.name]:e.target.value}))
    }
 
    return(
   <Formik
       initialValues={{
        date:'',
        occasion:'',
        guest:1,
        time:''
       }}
       onSubmit={values => {
         // same shape as initial values
          submitForm(values)
        
       }}
     >
       {({ errors, touched, isValid, validateField, validateForm, handleChange,values }) => (
         <Form>

    <section className="flex flex-col gap-2 p-2  my-6">
         <label className="w-[200px] " htmlFor="res-date">Choose date</label>
         <Field className="border px-4 py-2 rounded-md text-[#495E59] border-[#CBCDCC] bg-[#EDEFEE]" validate={validationDate} name="date" type="date" id="res-date"  />
         {errors.date && touched.date && <div className="text-sm text-red-500"> {errors.date}</div>}
    </section>        
  
   <section  className="flex flex-col gap-2 p-2  my-6">
       <label className="w-[200px]" htmlFor="res-time">Choose time</label>
      <Field as="select" className="border px-4 py-2 rounded-md text-[#495E59] border-[#CBCDCC] bg-[#EDEFEE]"  validate={validationTime} name="time" id="res-time"  >
        {availableTimes.map(t => (<option key={t}>{t}</option>))}
     </Field>
     {errors.time && touched.time && <div className="text-sm text-red-500"> {errors.time}</div>}
   </section>

   <section  className="flex flex-col gap-2 p-2  my-6">
     <label className="w-[200px] " htmlFor="guest">Number of guests</label>
    <Field type="number" className="border px-4 py-2 rounded-md text-[#495E59] border-[#CBCDCC] bg-[#EDEFEE]"  validate={validationGuest} placeholder="1" min="1" max="10" id="guest"  name="guest"  />
     {errors.guest && touched.guest && <div className="text-sm text-red-500"> {errors.guest}</div>}
   </section>
          
         <Field name="occasion" component={Occasion}   validate={validationOccasion} />
        {errors.occasion && touched.occasion && <div className="text-sm text-red-500"> {errors.occasion}</div>}

           <button  disabled={!isValid} className="p-2 bg-[#F4CE14] my-[40px] cursor-pointer rounded-md" type="submit">Make Your reservation</button>
         </Form>
       )}
     </Formik>





    )
}