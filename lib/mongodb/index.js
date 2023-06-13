import { MongoClient } from 'mongodb'

export default class MongoConnection{
  connection(){
    const client = new MongoClient(process.env.MONGODB_URI)
    return client
  }
}