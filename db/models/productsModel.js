const client = require("../client");

const getAllProducts = async () => {
    const { rows: allProducts} = await client.query(`
        SELECT * 
        FROM products;
    `)
    return allProducts
}

// export const insertProducts = async ({id, playerName, teamName, division, jerseyNumber, price, image}) => {
//     const {rows: [ newProduct ]} = await client.query(`
//         INSERT INTO products(id, playerName, teamName, division, jerseyNumber, price, image)
//         VALUES($1, $2, $3, $4, $5, $6, $7)
//         RETURNING *;
//     `, [id, playerName, teamName, division, jerseyNumber, price, image])
//     return newProduct
// }

async function insertProduct ({playerName, teamName, division, jerseyNumber, price, image}) {
    const {rows: [ newProduct ]} = await client.query(`
        INSERT INTO products("playerName", "teamName", division, "jerseyNumber", price, image)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `, [playerName, teamName, division, jerseyNumber, price, image])
    return newProduct
}

module.exports = { insertProduct, getAllProducts };