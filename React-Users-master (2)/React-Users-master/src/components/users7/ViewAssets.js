import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewAssets = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    location:"",
    area:"",
    fmv:"",
    sdv:"",

    leftb:"",
    rightb:"",
    front:"",
    back:"",
    attacthment:""
   

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/assets/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/assets">
        Back to Assets Page
      </Link>
      {/* <div className="display-4">Productsname Id: {id}</div> */}
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"> Id: {user.id}</li>
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item"> location: {user.location}</li>
        <li className="list-group-item">area: {user.area}</li>
        <li className="list-group-item">fmv : {user.fmv}</li>
        <li className="list-group-item"> sdv: {user.sdv}</li>
        <li className="list-group-item"> left : {user.leftb}</li>
        <li className="list-group-item">right: {user.rightb}</li>
        <li className="list-group-item"> front: {user.front}</li>
        <li className="list-group-item"> back : {user.back}</li>
        <li className="list-group-item"> attacthment : {user.attacthment}</li>

        


      </ul>
    </div>
  );
};

export default ViewAssets;
