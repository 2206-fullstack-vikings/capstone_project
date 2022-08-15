// grab our db client connection to use with our adapters
const client = require('../client');

module.exports = {
  // add your database adapter fns here
  getUsers,
  createUsers, 
  getUser
};

async function getUsers() {
  const { rows: allUsers} = await client.query(`
        SELECT * 
        FROM users;
    `)
    
    return allUsers
}

async function getUser( {username, password} ) {
  try {
    
      const {rows:[user]}= await client.query(`
        SELECT *
        FROM users
        WHERE username=$1;
        
      `,[username])
        return user;

  } catch (error) {
    console.log(error)
  }
  }



async function createUsers ({name, username, password, email, admin}) {
  const {rows: [ newUser ]} = await client.query(`
      INSERT INTO users(name, username, password, email, admin)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
  `, [name, username, password, email, admin])
  return newUser;
}