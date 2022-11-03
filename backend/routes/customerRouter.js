const { Router } = require("express");
const customerController = require("../controllers/customerController");

const customerRouter = Router();

customerRouter.get("/", customerController.getAll);
customerRouter.get("/:id", customerController.getOne);
customerRouter.post("/", customerController.create);
customerRouter.put("/:id", customerController.update);
customerRouter.delete("/:id", customerController.remove);

module.exports = customerRouter;
