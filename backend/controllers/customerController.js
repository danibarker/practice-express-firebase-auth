const Customers = require("../db/models/customers.js");

const getAll = async (req, res) => {
  try {
    const customers = await Customers.getAll();
    res.send(customers);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOne = async (req, res) => {
  try {
    const customer = await Customers.getOne(req.params.id);
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  try {
    const customer = await Customers.create(req.body);
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  try {
    const customer = await Customers.update(req.params.id, req.body);
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  try {
    const customer = await Customers.remove(req.params.id);
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAll, getOne, create, update, remove };
