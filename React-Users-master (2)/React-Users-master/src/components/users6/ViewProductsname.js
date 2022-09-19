import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewProductsname = () => {
  const [user, setUser] = useState({
    id: "",
    product_name: "",
    UOM:""
   

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/products/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/productname">
        Back to Product Name
      </Link>
      <div className="display-4">Productsname Id: {id}</div>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Product Name: {user.product_name}</li>
        <li className="list-group-item">UOM: {user.UOM}</li>

        


      </ul>
    </div>
  );
};

export default ViewProductsname;
