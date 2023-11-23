

import mongoose from "mongoose";
import orderModel from "./models/orders.model.js";

const consulta = async () => {
    await mongoose.connect(
        "mongodb+srv://nicolas11258:0kCg8T4wNf5Ne0zc@cluster0.sy13hmr.mongodb.net/clase_17?retryWrites=true&w=majority",
        {}
    );
    // await insertMany();
    // await find();
    await aggregate()
};

consulta();

const insertMany = async () => {
    let result = await orderModel.insertMany([
        { name: "Peperoni", size: "small", price: 19, quantity: 10, date: "2023-11-23T08:14:30Z" },
        { name: "Peperoni", size: "medium", price: 20, quantity: 10, date: "2023-11-23T08:14:30Z" },
        { name: "Peperoni", size: "large", price: 25, quantity: 10, date: "2023-11-23T08:14:30Z" },
        { name: "Vegan", size: "small", price: 19, quantity: 10, date: "2023-11-23T08:14:30Z" },
        { name: "Vegan", size: "medium", price: 20, quantity: 10, date: "2023-11-23T08:14:30Z" },
        { name: "Vegan", size: "large", price: 25, quantity: 10, date: "2023-11-23T08:14:30Z" },
        { name: "Vegan", size: "small", price: 19, quantity: 10, date: "2023-11-23T08:14:30Z" },
        { name: "Peperoni", size: "small", price: 19, quantity: 10, date: "2023-11-23T08:14:30Z" },
        { name: "Peperoni", size: "medium", price: 20, quantity: 10, date: "2023-11-23T08:14:30Z" },
        { name: "Peperoni", size: "large", price: 25, quantity: 10, date: "2023-11-23T08:14:30Z" },
        { name: "Peperoni", size: "small", price: 19, quantity: 10, date: "2023-11-23T08:14:30Z" },
    ])

    console.log(result);
}

const find = async () => {
    let result = await orderModel.find();
    console.log(result);
}

const aggregate = async () => {
    let orders = await orderModel.aggregate([
        {
            $match: {
                size: "medium"
            }
        },
        {
            $group: {
                _id: "$name",
                totalQuantity: {
                    $sum: "$quantity"
                }
            }
        },
        {
            $sort:{
                totalQuantity: -1,
            }
        },
        {
            $group: {
                _id: 1,
                orders: {
                    $push: "$$ROOT"
                }
            }
        },
        {
            $project: {
                "_id": 0,
                // orders: "$orders",
            }
        },
        // {
        //     $merge:{
        //         into: 'reports',
        //     }
        // }
    ])
    console.log(JSON.stringify(orders))
}