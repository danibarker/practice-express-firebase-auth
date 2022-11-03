const mongoose = require("../db.js");

const customerSchema = new mongoose.Schema({
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
});

// order model
const Customer = mongoose.model("Customer", customerSchema);

const getAll = async () => {
  try {
    const customers = await Customer.find();
    return customers;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const customer = await Customer.findById(id);
    return customer;
  } catch (error) {
    return error;
  }
};

const create = async (body) => {
  try {
    const customer = await Customer.create(body);
    return customer;
  } catch (error) {
    return error;
  }
};

const update = async (id, body) => {
  try {
    const customer = await Customer.findByIdAndUpdate(id, body, { new: true });
    return customer;
  } catch (error) {
    return error;
  }
};

const remove = async (id) => {
  try {
    const customer = await Customer.findByIdAndDelete(id);
    return customer;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};
