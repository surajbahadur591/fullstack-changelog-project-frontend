import axios from "axios";

// This file is the connection between fronend and backend
// Component will call the api of backend from here

// backend URL
const URL = "http://localhost:3001";

// sign up service : a json data is required by this function to create user
// - name , username and password field is mandatory

export const addUserService = async (data) => {
  try {
    // console.log("adduserservice");
    return await axios.post(`${URL}/user`, data);
  } catch (error) {
    console.log("Error while calling addUser API", error);
  }
};

//sign in service : a json data with username is required by this function
export const signInService = async (data) => {
  try {
    // console.log("signinservice");s
    return await axios.post(`${URL}/signin`, data);
  } catch (err) {
    console.log("error calling signinservice", err);
  }
};

export const allProductsService = async (data) => {
  try {

    return await axios.get(`${URL}/api/products`, data);

  } catch(err) {
    console.log("error calling allProductsService", err);
  }
}
