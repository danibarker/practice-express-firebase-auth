const mongoose = require("../db.js");

const orderSchema = new mongoose.Schema({
  customer: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer"
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  items: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "MenuItems"
      },
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "confirmed", "delivered", "cancelled"],
    default: "pending"
  }
});

// order model
const Order = mongoose.model("Order", orderSchema);

const getAll = async () => {
  try {
    const orders = await Order.find();
    return orders;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const order = await Order.findById(id);
    return order;
  } catch (error) {
    return error;
  }
};

const create = async (body) => {
  try {
    const order = await Order.create(body);
    return order;
  } catch (error) {
    return error;
  }
};

const update = async (id, body) => {
  try {
    const order = await Order.findByIdAndUpdate(id, body, { new: true });
    return order;
  } catch (error) {
    return error;
  }
};

const remove = async (id) => {
  try {
    const order = await Order.findByIdAndDelete(id);
    return order;
  } catch (error) {
    return error;
  }
};

const getByCustomer = async (id) => {
  try {
    const orders = await Order.find({ "customer._id": id });
    return orders;
  } catch (error) {
    return error;
  }
};

const getByStatus = async (status) => {
  try {
    const orders = await Order.find({ status });
    return orders;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
  getByCustomer,
  getByStatus
};
