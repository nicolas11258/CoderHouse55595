import Restaurants from "./models/Restaurants.model.js";

class RestaurantsDAO {
  constructor() {}

  async getAll() {
    try {
      return await Restaurants.find();
    } catch (error) {
      throw error;
    }
  }

  async getOne(id) {
    try {
      return await Restaurants.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async create(newRestaurantInfo) {
    try {
      return await Restaurants.create(newRestaurantInfo);
    } catch (error) {
      throw error;
    }
  }

  async update(id, restaurantUpdate) {
    try {
      return await Restaurants.updateOne(
        { _id: id },
        { $set: restaurantUpdate }
      );
    } catch (error) {
      throw error;
    }
  }
}

export default RestaurantsDAO;
