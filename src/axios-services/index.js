import axios from 'axios';

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

/* 
  export async function getUsers() {
    try {
      const { data: users } = await axios.get('/api/users')
      return users;
    } catch(err) {
      console.error(err)
    }
  }
*/

// export async function getAPIHealth() {
//   try {
//     const { data } = await axios.get('/api/health');
//     return data;
//   } catch (err) {
//     console.error(err);
//     return { healthy: false };
//   }
// }

// export const getAllProducts = async () =>{
//   try {
//        const response = await axios.get(`/api/products`)

//   } catch (error) {
//    console.error(error)
//   }
       
// }

 export const logInUser = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post("http://localhost:3000/api/users/login", {
      userName: userName,
      password: userPassword,
    });
  } catch (error) {
    console.log(error);
  }
};

export const registerNewUser = async (event) => {
  event.preventDefault();
  if(userPassword !== confirmPassword) alert("Passwords Do Not Match");
  
  try {
    const response = await axios.post("http://localhost:3000/api/users/register", {
      name: name,
      userName: userName,
      password: userPassword,
      email: email,
      location: location

    });
  } catch (error) {
    console.log(error);
  }
};