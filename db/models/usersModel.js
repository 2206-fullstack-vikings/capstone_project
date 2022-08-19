// grab our db client connection to use with our adapters
const client = require('../client');
const bcrypt= require("bcrypt");

module.exports = {
  // add your database adapter fns here
  getUsers,
  createUser, 
  getUser
};

async function getUsers() {
  const { rows: allUsers} = await client.query(`
        SELECT * 
        FROM users;
    `)
    
    return allUsers
}

// async function getUserByUserName(userName){
//   try {
//     const {rows:[user]}= await client.query(`
//       SELECT *
//       FROM users
//       WHERE username=$1;
//     `[userName])
//     return user;
//   } catch (error) {
//     console.log(error)
//   }
// }
async function getUser({ username, password }) {
  try {
      
      const {rows:[user]}= await client.query(`
        SELECT *
        FROM users
        WHERE username=$1;
      `,[username])
  
     
     console.log(user)
      return user;
  
    
    
  } catch (error) {
    console.log(error)
  }
  }



async function createUser ({name, username, password, email,location, admin}) {
  const hashedPassword = await bcrypt.hash(password,10)
  const {rows: [ newUser ]} = await client.query(`
      INSERT INTO users(name, username, "hashedPassword", email,location, admin)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *;
  `, [name, username, hashedPassword, email,location, admin])
  
  return newUser;
}