import axios from "axios";

// This file is the connection between fronend and backend
// Component will call the api of backend from here

// backend URL
const URL = "https://project-changelog-backend.onrender.com";

// const URL = "http://localhost:3001";

// sign up service : a json data is required by this function to create user
// - name , username and password field is mandatory
export const addUserService = async (data) => {
  try {
    return await axios.post(`${URL}/user`, data);
  } catch (error) {
    console.log("Error while calling addUser API", error);
  }
};

//sign in service : a json data with username is required by this function
export const signInService = async (data) => {
  try {
    return await axios.post(`${URL}/signin`, data);
  } catch (err) {
    console.log("error calling signinservice", err);
  }
};

// function to get all product data of  signed in user, bearer token is required and it is set in headers
export const allProductsService = async (token) => {
  try {
    return await axios.get(`${URL}/api/products`, {
      headers: { Authorization: `bearer ${token}` },
    });
  } catch (err) {
    console.log("error calling allProductsService", err);
  }
};

// function to  create a product, this function  required data of product and a token
export const createProductService = async (data, token) => {
  try {
    return await axios.post(`${URL}/api/product`, data, {
      headers: { Authorization: `bearer ${token}` },
    });
  } catch (err) {
    console.log("error calling createProductService", err);
  }
};

export const deleteProductService = async(id, token) => {
  
    try {
      return await axios.delete(`${URL}/api/product/${id}`, {
        headers: { Authorization: `bearer ${token}` },
      });
  }
  catch(err){
    console.log("error calling deleteProductService", err);
  }
}


export const addUpdateService = async (data, token) => {
  try {
    return await axios.post(`${URL}/api/update`, data, {
      headers: { Authorization: `bearer ${token}` },
    });
  } catch (err) {
    console.log("error calling addUpdateService", err);
  }
};

export const getAllUpdatesService = async (token) => {
  try {
    return await axios.get(`${URL}/api/updates`, {
      headers: { Authorization: `bearer ${token}` },
    });
  } catch (err) {
    console.log("error calling getAllUpdatesService", err);
  }
};


export const deleteUpdateService = async(token, id) => {
  try { 
    return await axios.delete(`${URL}/api/update/${id}`, {
      headers: { Authorization: `bearer ${token}` },
    });
  }
  catch (err){
    console.log("error calling deleteUpdateService", err);
  }

}