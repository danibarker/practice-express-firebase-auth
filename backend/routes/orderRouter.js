const { Router } = require("express");
const orderController = require("../controllers/orderController");

const orderRouter = Router();

orderRouter.get("/", orderController.getAll);
orderRouter.get("/:id", orderController.getOne);
orderRouter.post("/", orderController.create);
orderRouter.put("/:id", orderController.update);
orderRouter.delete("/:id", orderController.remove);
orderRouter.get("/customer/:id", orderController.getByCustomer);
orderRouter.get("/status/:status", orderController.getByStatus);

module.exports = orderRouter;
