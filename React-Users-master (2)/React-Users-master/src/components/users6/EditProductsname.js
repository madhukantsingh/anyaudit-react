import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditProductsname = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    
    product_name: "",
    UOM:""
  });

  const {product_name,UOM} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/products/${id}`, user);
    history.push("/productname");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/products/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Products</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <b>Products Name:</b>
            <input
              type="text"
             
              placeholder="Enter Your name"
              name="product_name"
              value={product_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <b>UOM:</b>
            <input
              type="text"
             
              placeholder="Enter Your name"
              name="UOM"
              value={UOM}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditProductsname;
