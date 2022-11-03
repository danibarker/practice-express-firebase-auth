const { Router } = require("express");
const customerRouter = require("./customerRouter");
const menuRouter = require("./menuRouter");
const orderRouter = require("./orderRouter");

const apiRouter = Router();

apiRouter.use("/menu", menuRouter);
apiRouter.use("/order", orderRouter);
apiRouter.use("/customer", customerRouter);

module.exports = apiRouter;
