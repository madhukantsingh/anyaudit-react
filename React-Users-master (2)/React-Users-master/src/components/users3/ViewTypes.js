import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewTypes = () => {
  const [user, setUser] = useState({
    tid: "",
    type: ""
   

  });
  const { tid } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/type/${tid}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/types">
        Back to Types
      </Link>
      <div className="display-4">Type Id: {tid}</div>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Type Name: {user.type}</li>
       
        


      </ul>
    </div>
  );
};

export default ViewTypes;
