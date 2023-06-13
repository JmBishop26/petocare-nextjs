import { combineReducers } from "redux";
import { BookingReducer } from "../action/booking/BookingReducer";

export const reducer = combineReducers({
    book: BookingReducer,
})