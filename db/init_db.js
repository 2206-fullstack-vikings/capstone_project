const {
  client,
  // declare your model imports here
  // for example, User
} = require('./');

const {insertProduct, getAllProducts} = require('./models/productsModel')
console.log("insertProduct dklmgijigewrijgrwhiogwer");
console.log(insertProduct);
const { products } = require("./productsData");

const { usersData } = require("./usersData");

// console.log("productsData /////////////////////////");
// console.log(products);






async function dropTables() {
  try {
    await client.query(`
      DROP TABLE IF EXISTS products;
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
      image VARCHAR(255) NOT NULL
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

   const getProducts = await getAllProducts();
   console.log("///////////////   getAllProducts /////////////////")
   console.log(getProducts);
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
