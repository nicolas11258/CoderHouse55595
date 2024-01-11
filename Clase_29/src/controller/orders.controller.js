import { Router } from "express";
import { v4 as uuidV4 } from 'uuid'
import OrdersDAO from "../dao/Orders.dao.js";
import RestaurantsDAO from "../dao/Restaurants.dao.js";
import UsersDAO from "../dao/Users.dao.js";

const Orders = new OrdersDAO();
const Restaurants = new RestaurantsDAO();
const Users = new UsersDAO();
const router = Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Orders.getAll();
    res.json({ status: "success", message: orders });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.getOne(id);

    res.json({ status: "success", message: order });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      restaurant: restaurantId,
      user: userId,
      products: productsList,
    } = req.body;
    const number = uuidV4()
    const restaurant = await Restaurants.getOne(restaurantId);
    const user = await Users.getOne(userId);
    const productsValidate = restaurant.products.filter((product) =>
      productsList.includes(product.name)
    );

    const totalPrice = productsValidate.reduce(
      (acc, current) => acc + current.price,
      0
    );

    const newOrderInfo = {
      number,
      restaurant: restaurant._id,
      user: user._id,
      products: productsValidate,
      totalPrice,
    };

    const newOrder = await Orders.create(newOrderInfo);

    res.status(201).json({ status: "success", message: newOrder });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {} = req.body;
    res.json({ status: "success", message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

export default router;
