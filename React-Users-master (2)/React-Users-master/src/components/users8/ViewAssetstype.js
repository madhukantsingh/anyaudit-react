import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewAssetstype = () => {
  const [user, setUser] = useState({
    id: "",
    assetstype: ""
   

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/assetstype/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/sister">
        back to Assetstype
      </Link>
      {/* <h6 className="display-4">Sister Id: {id}</h6> */}
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.assetstype}</li>
        


      </ul>
    </div>
  );
};

export default ViewAssetstype;
