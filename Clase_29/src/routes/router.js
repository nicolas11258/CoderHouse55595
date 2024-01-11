import usersController from "../controller/users.controller.js";
import restaurantsController from "../controller/restaurants.controller.js";
import ordersController from "../controller/orders.controller.js";

const router = (app) => {
  app.use("/users", usersController);
  app.use("/restaurants", restaurantsController);
  app.use("/orders", ordersController);
};

export default router;
