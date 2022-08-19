const {
  client,
  // declare your model imports here
  // for example, User
} = require('./');

const {insertProduct, getAllProducts} = require('./models/productsModel')
const {createUser}= require('./models/usersModel')

console.log(insertProduct);
const { products } = require("./productsData");

const { users } = require("./usersData");

// console.log("productsData /////////////////////////");
// console.log(products);






async function dropTables() {
  try {
    await client.query(`
      DROP TABLE IF EXISTS "cartItems";
      DROP TABLE IF EXISTS "userCarts";
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS users;
    `)
  } catch(error) {
    console.log(error)
  }
}

async function createTables() {
  try {
    await client.query(`
    CREATE TABLE products(
      id SERIAL PRIMARY KEY,
      "playerName" VARCHAR(255) NOT NULL,
      "teamName" VARCHAR(255) NOT NULL,
      division VARCHAR(255) NOT NULL,
      "jerseyNumber" INTEGER NOT NULL,
      price FLOAT DEFAULT 0,
      image TEXT NOT NULL
    );

    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      username VARCHAR(255) UNIQUE NOT NULL,
      "hashedPassword" VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      admin BOOLEAN DEFAULT false
    );

    CREATE TABLE "userCarts"(
      id SERIAL PRIMARY KEY,
      userid INTEGER REFERENCES users(id)
     
    );

    CREATE TABLE "cartItems"(
      id SERIAL PRIMARY KEY,
      "productId" INTEGER REFERENCES products(id),
      "purchasePrice" FLOAT,
      "userCartId" INTEGER REFERENCES "userCarts"(id)
    );
  `)
  } catch(error) {
    console.log(error)
  }
}


async function buildTables() {
  try {
    client.connect();
    // drop tables in correct order
    dropTables();
    console.log("TablesDropped")
    // build tables in correct order
    createTables();
        console.log("TablesCreated")

   
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
   const allProducts = await Promise.all(products.map(insertProduct));

   const allusers = await Promise.all(users.map(createUser));
  //  console.log('this is all users', allusers);


   

   
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
