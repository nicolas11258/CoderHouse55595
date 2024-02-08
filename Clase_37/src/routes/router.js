import usersController from "../controller/users.controller.js";
import restaurantsController from "../controller/restaurants.controller.js";
import ordersController from "../controller/orders.controller.js";
import mailController from "../controller/mail.controller.js";



const router = (app) => {
  app.use("/users", usersController);
  app.use("/restaurants", restaurantsController);
  app.use("/orders", ordersController);
  app.use("/mail", validInt,  mailController);
};

export default router;
