import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewProductsname = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    defaults:"",
    u_of_measurement:""
   

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/family/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/family">
        Back to Family
      </Link>
      {/* <div className="display-4">Family Id: {id}</div> */}
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Defaults: {user.defaults}</li>
        <li className="list-group-item">U_Of_Measurement: {user.u_of_measurement}</li>


        


      </ul>
    </div>
  );
};

export default ViewProductsname;
