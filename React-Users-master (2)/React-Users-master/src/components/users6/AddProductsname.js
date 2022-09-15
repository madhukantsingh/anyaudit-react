import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddProductsname = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    
    name: "",
    uom:""
    
  });

  const { name} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/users", user);
    history.push("/");
  };
  return (
    
     <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Products Names</h2>
        <center>
        <form onSubmit={e => onSubmit(e)}>
        
         
          <div className="form-group">
          &nbsp;&nbsp;&nbsp;  <b>Products Name:</b>&nbsp;
            <input
              type="text"
             
              placeholder="Enter Your name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>

          
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>UOM:</b>&nbsp;
      <select  className="form-group">
        <option value="no. uom here">--no Uom Here--</option>
        <option value="uom1">uom1</option>
        <option value="uom2">uom2</option>
      </select>&nbsp; &nbsp;
     </div> 
    


          
          
          <center>
                      <button className="btn btn-primary">Submit </button>
                      </center>
        </form>
        </center>
      </div>
    </div>

  );
};

export default AddProductsname;
