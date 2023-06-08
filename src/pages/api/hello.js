import clientPromise from "@/lib/mongodb";

export default async (req, res) => {
  try {
      const client = await clientPromise;
      const db = await client.db()
      const data = await db.collection("products").find({}).toArray()

      res.json(data);

  } catch (e) {
      console.error(e);
  }
}