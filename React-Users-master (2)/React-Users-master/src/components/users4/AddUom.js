import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { configure } from "@testing-library/react";

const AddUom = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    
    familyname: "",
    measure:""
    
  });

  const {measure } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => { console.log(user)
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">UOM Master</h2>
        <center>
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <b>Measure:</b>&nbsp;
            <input
              type="text"
             
              placeholder="Enter Your name"
              name="measure"
              value={measure}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          
          
          <button className="btn btn-primary ">Submit </button>
        </form>
        </center>
      </div>
    </div>
  );
};

export default AddUom;
