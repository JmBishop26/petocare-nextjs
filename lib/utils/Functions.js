import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { redirect } from "react-router-dom";

const MySwal = withReactContent(Swal)
let options = {}

export const getRooms = async ()=>{
    const response = await axios.get(`/api/book/rooms`)
    const rooms = await JSON.parse(JSON.stringify(response))

    return rooms
}

export const bookRoom = async(formData) =>{
    options = {
        method:"POST",
        url: `/api/book`,
        data: formData,
    }
    const response = await axios(options)

    if(response.status === 200){
        MySwal.fire({
            icon: "success",
            title: response.data['msg']
        }).then((result)=>{
            if(result.isConfirmed){
                window.location.reload(true)
            }
        })
    }else{
        MySwal.fire({
            icon: "error",
            title: response.data['msg']
        })
    }
}

export const orderItem = async(formData) =>{
    options = {
        method:"POST",
        url: `/api/buy`,
        data: formData,
    }
    const response = await axios(options)

    if(response.status === 200){
        MySwal.fire({
            icon: "success",
            title: response.data['msg']
        }).then((result)=>{
            if(result.isConfirmed){
                window.location.reload(true)
            }
        })
    }else{
        MySwal.fire({
            icon: "error",
            title: response.data['msg']
        })
    }
}