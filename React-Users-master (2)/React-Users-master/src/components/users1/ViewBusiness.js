import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    description: "",
    location: "",
    products: "",
    IEAL: "",
    type: "",
    heads: ""

  });

  
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/business/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      {/* <h1 className="display-4">User Id: {id}</h1> */}
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">description: {user.description}</li>
        <li className="list-group-item">location: {user.location}</li>
        <li className="list-group-item">products: {user.products}</li>
        <li className="list-group-item">IEAL: {user.IEAL}</li>
        <li className="list-group-item">type: {user.type}</li>
        <li className="list-group-item">heads: {user.heads}</li>


      </ul>
    </div>
  );
};

export default User;
