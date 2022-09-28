import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

const EditUom = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    
    name: "",
    measure: "",
  });

  
  const {  name,measure} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/uom/${id}`, user);
    history.push("/uom");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/uom/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Uom</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>ID:</b>&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              
              placeholder="Enter ID"
              name="id"
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div><p></p>
         
          <div className="form-group">
          <b>Name:</b>&nbsp;&nbsp;&nbsp;
          <select onChange={e => onInputChange(e)} value={name} >
        <option>{name}</option>
      </select>
          </div>
          <div className="form-group">
          <b>Measure:</b>&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
             
              placeholder="Enter measure"
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
