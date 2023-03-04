import React, { useEffect, useState } from "react";
import {
  allProductsService,
  addUpdateService,
  createProductService,
  deleteProductService,
  deleteUpdateService,
  getAllUpdatesService,
} from "../apiservices/services";
import dateFormat from "dateformat";

const Products = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [productName, setProductName] = useState("");
  const [updatedetails, setUpdateDetails] = useState([]);
  const [featureTitle, setFeatureTitle] = useState({
    title: "",
    body: "",
    id: "",
  });

  // function to get values from input form - product
  const changeHandler = (e) => {
    // console.log(e.target.name);
    setProductName({ ...productName, [e.target.name]: e.target.value });
  };

  // function to get values from input form - features creation
  const featuresChangeHandler = (e) => {
    setFeatureTitle({ ...featureTitle, [e.target.name]: e.target.value });
  };

  // create a product by calling end point
  const createProduct = async () => {
    const userToken = localStorage.getItem("jwtToken");
    await createProductService(productName, userToken);
    // calling getProduct to refresh data after a new product is created
    getProduct();
  };

  // get products from backend
  const getProduct = async () => {
    const userToken = localStorage.getItem("jwtToken");
    const product = await allProductsService(userToken);
    // console.log(product.data.data)
    setProductDetails(product.data.data);
    getUpdates();
  };

  const deleteProduct = async (e) => {
    const userToken = localStorage.getItem("jwtToken");
    // console.log(e.target.id)
    await deleteProductService(e.target.id, userToken);
    alert("product deleted ");
    getProduct();
  };

  const addFeatures = async (e) => {
    const userToken = localStorage.getItem("jwtToken");
    featureTitle.id = e.target.id;
    // console.log(featureTitle);

    await addUpdateService(featureTitle, userToken);
    getProduct();
  };

  const getUpdates = async () => {
    const userToken = localStorage.getItem("jwtToken");
    const updates = await getAllUpdatesService(userToken);
    // console.log(updates.data.updates)
    setUpdateDetails(updates.data.updates);
  };

  const deleteUpdate = async (e) => {
    console.log("delete features", e.target.id);
    const userToken = localStorage.getItem("jwtToken");
    await deleteUpdateService(userToken, e.target.id);
    getProduct();
  };

  useEffect(() => {
    getProduct();
    getUpdates();
  }, []);

  return (
    <div className="bg-black h-full text-white">
      <div className="bg-[gray-700] max-w-[900px] h-full mx-auto">
        {/* if no products , give user a note  */}
        {/* {productDetails.length === 0 ? "No Products" : "Changelog"} */}
        <div>
          <input
            onChange={(e) => changeHandler(e)}
            className="w-full text-white bg-[#060B27] py-2 my-2 border-2 border-[#181D39] rounded-lg focus:border-indigo-800 focus:outline-none"
            type="text"
            name="name"
            placeholder="Product Name"
          />

          {/* create product button calling api   */}
          <button
            onClick={() => {
              createProduct();
            }}
            className="bg-black py-2 px-6 border border-blue-500 text-white"
          >
            Create Product
          </button>
          <br />
          {productDetails.length === 0 ? (
            <div>
              No Products exists :{" "}
              <a
                className="text-[#FF9641] underline"
                target="_blank"
                rel="noreferrer"
                href="https://itsmesuraj.s3.ap-south-1.amazonaws.com/product+example.PNG"
              >
                see examples
              </a>{" "}
            </div>
          ) : (
            ""
          )}
        </div>
        {productDetails &&
          productDetails.map((product) => (
            <div
              key={product.id}
              className="bg-[#1B1B1B] my-[20px] px-6 py-6 h-500px] max-w-[800px] mx-auto rounded-lg"
            >
              <div className="flex w-full justify-between">
                <p className="mx-28 text-2xl font-semibold capitalize text-[#DE65E5]">
                  {product.Name}
                </p>
                <button
                  onClick={(e) => {
                    deleteProduct(e);
                  }}
                  className="px-4 border mx-1"
                  id={product.id}
                >
                  {" "}
                  Delete{" "}
                </button>
                {/* <button className="px-4 border mx-1" id={product.id}>Edit</button> */}
              </div>

              <p className="px-1 mt-[-20px] text-xs">
                {dateFormat(product.createdAt, "mmmm dS, yyyy")}
              </p>

              <div className="my-12 mx-28">
                <h1 className="text-base font-semibold uppercase">Features</h1>
                {updatedetails &&
                  updatedetails.map((feature) => {
                    return feature.productId === product.id ? (
                      <div className="flex justify-between" key={feature.id}>
                        <h1 className="w-[300px]" key={feature.id}>
                          --- {feature.title}{" "}
                        </h1>
                        <h1 className="text-[#FF9641]">
                          Status : {feature.status}
                        </h1>
                        <button
                          onClick={(e) => {
                            deleteUpdate(e);
                          }}
                          className="px-1 border mx-1"
                          id={feature.id}
                        >
                          X
                        </button>
                      </div>
                    ) : (
                      <div key={Math.random()}></div>
                    );
                  })}
                <input
                  onChange={(e) => featuresChangeHandler(e)}
                  className="w-full text-white bg-[#1B1B1B] py-2 my-2 border border-gray-500 rounded-lg focus:border-indigo-800 focus:outline-none"
                  type="text"
                  name="title"
                  placeholder="Features"
                />
                <button
                  id={product.id}
                  onClick={(e) => {
                    addFeatures(e);
                  }}
                  className="bg-[#1B1B1B] py-2 px-6 border border-white text-white"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
