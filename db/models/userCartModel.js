const client = require('../client');
const {getUser}= "./usersModel.js"


async function createCart(id){
   
    try {
       
       const {rows:[cart]}= await client.query(`
       INSERT INTO "userCarts"(userid)
       VALUES($1);
       
<<<<<<< HEAD
       `[id])
=======
       `,[id])
>>>>>>> ec28f36c44c42e7587c66b65336d4668ef7c8f31
       console.log("getting this far")
       return cart;
    } catch (error) {
        console.log(error)
    }
}

async function checkForCart(id){
    try {
        const {rows:[cart]}= await client.query(`
        SELECT *
        FROM "userCarts"
        WHERE userid=$1;
<<<<<<< HEAD
        `[id])
=======
        `,[id])
>>>>>>> ec28f36c44c42e7587c66b65336d4668ef7c8f31
    } catch (error) {
        console.log(error)
    }
}

async function getCartId(userId){
    try {
        const {row:[cartId]}= await client.query(`
        SELECT id
        FROM "userCarts"
        WHERE userid = $1;
        `,[userId])

        return cartId;
    } catch (error) {
        console.log(error)
    }
}

module.exports={createCart,checkForCart}





