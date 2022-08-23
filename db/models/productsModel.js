const client = require("../client");

const getAllProducts = async () => {
  const { rows: allProducts } = await client.query(`
        SELECT * 
        FROM products;
    `);
  return allProducts;
};

const getProductById = async ({ id }) => {
  const {
    rows: [product],
  } = await client.query(
    `
        SELECT * 
        FROM products
        WHERE id = $1;
    `,
    [id]
  );

  return product;
};

async function insertProduct({
  playerName,
  teamName,
  division,
  jerseyNumber,
  price,
  image,
}) {
  try {
    const {
      rows: [newProduct],
    } = await client.query(
      `
        INSERT INTO products("playerName", "teamName", division, "jerseyNumber", price, image)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `,
      [playerName, teamName, division, jerseyNumber, price, image]
    );
    return newProduct;
  } catch (error) {
    console.log(error);
  }
}

async function editProduct({ id, ...fields }) {
  console.log("id /////////////////////////");
  console.log(id);
  console.log("fields /////////////////////////");
  console.log(fields);
  const setKeys = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  if (setKeys.length === 0) {
    return;
  }

  try {
    const {
      rows: [product],
    } = await client.query(
      `
        UPDATE products
        SET ${setKeys}
        WHERE id=${id}
        RETURNING *;
    `,
      Object.values(fields)
    );
    return product;
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct(id) {
  console.log("id");
  console.log(id);
  try {
    const {
      rows: [product],
    } = await client.query(
      `
            DELETE
            FROM products
            WHERE id=$1
            RETURNING *;
        `,
      [id]
    );
    return product;
  } catch (error) {}
}

module.exports = {
  insertProduct,
  getAllProducts,
  getProductById,
  editProduct,
  deleteProduct,
};
