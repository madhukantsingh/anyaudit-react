import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUom = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    measure:""
   

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/uom/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/Uom">
        Back to UOM Page
      </Link>
      {/* <div className="display-4">Productsname Id: {id}</div> */}
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Uom Name: {user.name}</li>
        <li className="list-group-item">measure: {user.measure}</li>

        


      </ul>
    </div>
  );
};

export default ViewUom;
