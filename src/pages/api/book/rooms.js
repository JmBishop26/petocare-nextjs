import MongoConnection from "@/lib/mongodb";
// import clientPromise from "@/lib/mongodb";

export default async (req, res) => {
  try {
    const mongo = new MongoConnection()
    const client = mongo.connection()
    const db = client.db()
    const data = await db.collection("rooms").find({}).toArray()

    res.json(data);

  } catch (e) {
      console.error(e);
  }
}