const { faker } = require("@faker-js/faker");

faker.locale = "es";

const generateUsers = (numUsers) => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    users.push(generateUser());
  }
  return users;
};

const generateUser = () => {
  const numOfProducts = faker.random.numeric(1, { bannedDigits: ["0"] });

  const products = [];
  for (let i = 0; i < numOfProducts; i++) {
    products.push(generateProducts());
  }

  return {
    name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    birthDate: faker.date.birthdate(),
    phone: faker.phone.number(),
    image: faker.internet.avatar(),
    // role: faker.helpers.arrayElement(['cliente', 'vendedor']),
    // role: "vendedor",
    job: faker.name.jobType(),
    title: faker.name.jobTitle(),
    product: products,
  };
};

const generateProducts = () => {
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    stock: faker.random.numeric(2, { bannedDigits: ["0"] }),
    description: faker.lorem.lines(),
    image: faker.image.abstract(),
  };
};

module.exports = generateUsers;
