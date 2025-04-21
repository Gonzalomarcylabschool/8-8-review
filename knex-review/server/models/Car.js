const knex = require('./knex');

class Car {
  // Static method to get all cars
  static async list() {
    const query = `
      SELECT * FROM cars`
      const {rows} = await knex.raw(query);
    return rows;
  }

  // static method to get a car by ID


  // static method to create a new car
  static async create(carName, carModel, carYear) {
    const query = `
      INSERT INTO cars (name, model, year)
      VALUES (?, ?, ?)`;
    const { rows } = await knex.raw(query, [carName, carModel, carYear]);
    return rows;

  // static method to update a car's name by ID



  // static method to delete a car by ID
}

module.exports = Car;