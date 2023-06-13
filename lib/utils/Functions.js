import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
let options = {}

export const getRooms = async ()=>{
    const response = await axios.get(`http://localhost:3001/api/book/rooms`)
    const rooms = await JSON.parse(JSON.stringify(response))

    return rooms
}

export const bookRoom = async(formData) =>{
    options = {
        method:"POST",
        url: `http://localhost:3001/api/book`,
        data: formData,
    }
    const response = await axios(options)

    if(response.status === 200){
        MySwal.fire({
            icon: "success",
            title: response.data['msg']
        })
    }else{
        MySwal.fire({
            icon: "error",
            title: response.data['msg']
        })
    }
     

}