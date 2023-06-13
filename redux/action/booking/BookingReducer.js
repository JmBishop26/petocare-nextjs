import { SUBMIT_FORM } from "../ActionTypes"


const initialState ={
    form:{}
}

export const BookingReducer =(state=initialState, action)=>{
    switch(action.type){
        case SUBMIT_FORM:
            return{
                ...state,
                formData: action.payload
            }
        default:
            return state
    }
}