import MongoConnection from "@/lib/mongodb"


const mongo = new MongoConnection()
const client = mongo.connection()
const db = client.db()

export const postMethod = async(req, res)=>{
    try {
        const formData = req.body
        const booking = db.collection("booking")
        const response = await booking.insertOne(formData)

        return res.status(200).json({success: true, msg: "Booking Successfully"})
    } catch (error) {
        res.status(400).json({success: false, msg: "There is an error encountered. Please try again later."})
    }
    finally{
        await client.close()
    }
}

export const getMethod = async(req, res) =>{
    try {
        const booking = db.collection("booking")
        const data = await booking.find({}).toArray()
        return res.json(data)
    } catch (error) {
        res.status(400).json(`${error}`)
    }
    finally{
        await client.close()
    }
}

export const orderProduct = async(req, res)=>{
    try {
        const formData = req.body
        const booking = db.collection("orders")
        const response = await booking.insertOne(formData)

        return res.status(200).json({success: true, msg: "Ordered Successfully"})
    } catch (error) {
        res.status(400).json({success: false, msg: "There is an error encountered. Please try again later."})
    }
    finally{
        await client.close()
    }
}