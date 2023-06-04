// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDb } from "../lib/connection"
import { getProducts, postProducts } from "@/models/api/products"
export default function handler(req, res) {
  connectDb().catch(()=>res.status(405).json({error: "Connection error"}))
  // postProducts(req, res)
  getProducts(req, res)
  // res.status(200).json({ name: 'John Doe' })
}
