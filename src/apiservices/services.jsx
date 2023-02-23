import axios from "axios";

// paste backend url
// "http://localhost:8000" ||
// const URL =  "https://mern-stack-crud-app-backend.onrender.com";

const URL = 'http://localhost:3001'

export const addUserService = async (data) => {
  try {
    console.log('adduserservice')
    return await axios.post(`${URL}/user`, data);
  } catch (error) {
    console.log("Error while calling addUser API", error);
  }
};

export const signInService = async (data) => {
    try{
        console.log('signinservice')
        return await axios.post(`${URL}/signin`, data);

    }
    catch (err){
        console.log('error calling signinservice', err)
    }
}