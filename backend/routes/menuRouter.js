const { Router } = require("express");
const { checkIfAuthenticated } = require("../auth/auth");
const menuController = require("../controllers/menuController");

const menuRouter = Router();
menuRouter.get("/test", checkIfAuthenticated, (req, res) => {
  if (req.userInfo) {
    return res.send(req.userInfo);
  }
  return res.send("no user");
});

menuRouter.get("/", menuController.getAll);
menuRouter.get("/:id", menuController.getOne);
menuRouter.post("/", menuController.create);

module.exports = menuRouter;
