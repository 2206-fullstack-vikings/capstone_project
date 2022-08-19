const client = require('../client');
const {getUser}= "./usersModel.js"


async function createCart(id){
   
    try {
       const {rows:[cart]}= await client.query(`
       INSERT INTO "userCarts"(userid)
       VALUES($1, $2)
       `[id])
    } catch (error) {
        console.log(error)
    }
}

async function checkForCart(id){
    try {
        const {rows:[cart]}= await client.query(`
        SELECT *
        FROM "userCarts"
        WHERE userid=$1
        `[id])
    } catch (error) {
        console.log(error)
    }
}

module.exports={createCart,checkForCart}