export function validationGuest(value){
   return false
}

export function validationDate(value){
    let error;
     if(!value){
          error =" Date is required"
     }
     else if(new Date(value) < Date.now ){
              error =" Date must be after today"
     }
   return error
}

export function validationTime(value){
   return false
}

export function validationOccasion(value){
   
   let error;
     if(!value){
          error ="Occasion is required"
     }
   return error
}