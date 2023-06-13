import { SUBMIT_FORM } from "../ActionTypes"

export const submitBooking =(data)=>{
    return{
        type: SUBMIT_FORM,
        payload: data
    }
}