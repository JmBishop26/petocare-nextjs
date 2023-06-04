    import { Schema, models, model } from 'mongoose';

    const productSchema = new Schema({
        name: String,
        price: Number,
        category: String, 
        description: String,
    })
    // const productSchema = new Schema({
    //     name: String,
    //     image: String,
    //     price: Number,
    //     category: String, 
    //     description: String,
    //     stocks: Number,
    //     date_added: Date,
    //     date_updated: Date 
    // })

    export const Products = models.products || model('products', productSchema)

// {
//     "_id": {
//       "$oid": "6458b3a0ac9a1503cf90e3bf"
//     },
//     "name": "Dog Shampoo",
//     "price": 3,
//     "category": "Pet Hygiene",
//     "description": "A gentle and effective dog shampoo for clean, shiny coats. Safe for dogs of all ages and sizes.",
//     "stocks": 10,
//     "date_added": {
//       "$date": "2023-05-09T12:30:00.000Z"
//     },
//     "date_updated": {
//       "$date": "2023-05-09T12:30:00.000Z"
//     },
//     "image": "sample_image"
//   }
//   {
//     "_id": {
//       "$oid": "6458b521ac9a1503cf90e3c1"
//     },
//     "name": "Cat Shampoo",
//     "image": "sample_image",
//     "price": 3,
//     "category": "Pet Hygiene",
//     "description": "Gentle and effective, this high-quality cat shampoo removes dirt and odor while being kind to your cat's sensitive skin and fur. Give your furry friend a luxurious spa treatment with this must-have product.",
//     "stocks": 10,
//     "date_added": {
//       "$date": "2023-05-09T12:30:00.000Z"
//     },
//     "date_updated": {
//       "$date": "2023-05-09T12:30:00.000Z"
//     }
//   }