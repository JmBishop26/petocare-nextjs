import { connectDb } from "@/src/pages/lib/connection";
import { Products } from "@/models/model/products";
export async function getProducts(req, res){
    try {
        const products = await Products.find({})
        if(!products) return res.status(404).json({error:"Data not found"})
        res.status(200).json({products})
        // res.status(200).json({get:"Hello Guys"})
    } catch (error) {
        res.status(404).json({error: error})
    }
}

// export async function postProducts(req, res){
//     try {
//         const formdata = req.body
//         if(!formdata) return res.status(400).json({error: "form data not provided"})
//         const data = await Products.create(formdata)
//         return res.status(200).json(data)
//     } catch (error) {
//         return res.status(400).json({error})
//     }
// }
