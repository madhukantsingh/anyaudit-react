import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewHeads = () => {
  const [user, setUser] = useState({
    id: "",
    heads: ""
   

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/heads/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/heads">
        Back to Heads
      </Link>
      <div className="display-4">Heads Id: {id}</div>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Heads Name: {user.heads}</li>
       
        


      </ul>
    </div>
  );
};

export default ViewHeads;
