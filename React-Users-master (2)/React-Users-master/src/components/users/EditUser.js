import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    
    name: "",
    pan: "",
    email: "",  
    phone: "",
    cinno: "",
    sister:""
   
  });

  const {  name, pan, email, phone, cinno, sister} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/company/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/company/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Company</h2>
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
            <input
              type="text"
              
              placeholder="Enter Your name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <b>Email:</b>&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="email"
             
              placeholder="Enter Your E-mail"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <b>Phone:</b>&nbsp;&nbsp;
            <input
              type="text"
              
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">&nbsp;&nbsp;
          <b>PAN:</b>&nbsp;&nbsp;&nbsp;&nbsp; 
            <input
              type="text"
            
              placeholder="Enter Your Pan"
              name="pan"
              value={pan}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <b>CIN NO:</b>&nbsp;
            <input
              type="text"
              // className="form-control"
              placeholder="Enter CIN NO"
              name="cinno"
              value={cinno}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <b>Sister:</b>&nbsp;
            <input
              type="text"
              // className="form-control"
              placeholder="Enter "
              name="sister"
              value={sister}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
