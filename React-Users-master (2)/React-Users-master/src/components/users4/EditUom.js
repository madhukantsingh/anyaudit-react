import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUom = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    
    familyname: "",
    measure:""
  });

  const { measure } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Company</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <b>Family Name:</b>&nbsp;
            
      <select>
        <option value="name">Family Names Here</option>
        <option value="f">f</option>
        <option value="m">M</option>
      </select>
    
          </div>
          <div className="form-group">&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; <b>Measure:</b>&nbsp;
            <input
              type="text"
             
              placeholder="Enter Your name"
              name="measure"
              value={measure}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditUom;
