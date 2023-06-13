import { postMethod, getMethod } from "@/lib/controllers/controller";

export default async function handler(req, res){
  try {

    const { method } = req

      switch(method){
        case "GET":
            getMethod(req, res)
            break;
        case "POST":
            postMethod(req, res)
            break;
        case "PUT":
            res.status(200).json({method, name:"PUT Request"})
            break;
        case "DELETE":
            res.status(200).json({method, name:"DELETE Request"})
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method: ${method} not allowed`)
            break;
      }

  } catch (e) {
      console.error(e);
  }
}