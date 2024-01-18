import Orders from "./models/Orders.model.js";

class OrdersDAO {
  constructor() {}

  async getAll() {
    try {
      return await Orders.find();
    } catch (error) {
      throw error;
    }
  }

  async getOne(id) {
    try {
      return await Orders.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async create(orderInfo) {
    try {
      return await Orders.create(orderInfo);
    } catch (error) {
      throw error;
    }
  }

  async update(id, orderUpdate) {
    try {
      return await Orders.updateOne({ _id: id }, { $set: orderUpdate });
    } catch (error) {
      throw error;
    }
  }
}

export default OrdersDAO;
