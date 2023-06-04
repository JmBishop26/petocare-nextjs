import mongoose from "mongoose";

export const connectDb = async()=>{
    try {
        const { connection }= await mongoose.connect(process.env.MONGO_URI)
        if(connection.readyState == 1){
            console.log("Connected to MongoDB")
        }

    } catch (error) {
        return Promise.reject(error)
    }
}

// import { MongoClient } from 'mongodb';

// const client = new MongoClient(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// export async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     const db = client.db('petocare');
//     console.log({ db, client });
//   } catch (error) {
//     console.log('Failed to connect to MongoDB', error);
//     throw error;
//   }
// }
