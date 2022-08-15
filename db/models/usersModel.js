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

async function getUser(username, password ) {
  try {
      console.log("this is our password", password)
      const {rows:[user]}= await client.query(`
        SELECT *
        FROM users
        WHERE username=$1;
        
      `,[username])
      console.log('this is out user', user);
      return user;

  } catch (error) {
    console.log(error)
  }
  }

getUser('choker', 'iNeedToGo');

async function createUsers ({name, username, password, email, admin}) {
  const {rows: [ newUser ]} = await client.query(`
      INSERT INTO users(name, username, password, email, admin)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
  `, [name, username, password, email, admin])
  return newUser;
}