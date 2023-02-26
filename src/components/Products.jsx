import React, { useEffect, useState } from "react";
import { allProductsService, createProductService } from "../apiservices/services";

const Products = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [productName, setProductName]= useState('')


  const changeHandler = (e) => {
    setProductName({ ...productName, [e.target.name]: e.target.value });
  };

  const getProduct = async () => {
    const userToken = localStorage.getItem("jwtToken");
    const product = await allProductsService(userToken);
    setProductDetails(product.data.data);
  };

  const createProduct =  async () => {
    const userToken = localStorage.getItem("jwtToken");
    const createdproduct = await createProductService(productName, userToken);
    // setProductDetails(createdproduct.data.data);
    console.log(createdproduct)
    getProduct()
  }

  

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="bg-black h-full text-white">
      <div className="bg-gray-900 max-w-[900px] h-full mx-auto">
        {productDetails.length === 0 ? "No Products" : "Changelog"}
        <div>
            <input onChange={(e) => changeHandler(e)} className="w-full text-white bg-[#060B27] py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none" type="text" name='name' placeholder="product name"/>
            <button onClick={ ()  =>{
                createProduct()
            }} className="bg-black py-2 px-6 border border-blue-500 text-white" >Create Product</button>
        </div>
        {productDetails && productDetails.map((product) => (
          <div key={product.id} className='bg-[#FB4F98] my-[20px] h-[500px] max-w-[600px] mx-auto rounded-lg'>
            <p className="px-12">Product name : {product.Name}</p>
            <p className="px-12">Created at : {product.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
