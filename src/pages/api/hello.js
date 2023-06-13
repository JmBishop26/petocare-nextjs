// import MongoConnection from "@/lib/mongodb";
// // import clientPromise from "@/lib/mongodb";

// export default async (req, res) => {
//   const mongo = new MongoConnection()
//   const client = mongo.connection()
//   const db = client.db()
//   try {
//       const data = await db.collection("products").find({}).toArray()
//       res.json(data);
//   } catch (e) {
//       console.error(e);
//   }finally{
//     await client.close();
//   }
// }