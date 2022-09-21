import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddFamily = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    
    name: "",
    defaults: "",
    u_of_measurement:""
    
  });

  const { name, defaults, u_of_measurement } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => { console.log(user)
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/family", user)
    .then(res=>res.json())
    .then((result)=>{
        alert(result);

    },
    (error)=>{
        alert('Added Sucessfully');
    });
    history.push("/family");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Family Name</h2>
        <center>
        <form onSubmit={e => onSubmit(e)}>
        
         
          <div className="form-group">
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<b>Name:</b>&nbsp;
            <input
              type="text"
             
              placeholder="Enter Your name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Default:</b>&nbsp;
            <input
              type="text"
             
              placeholder="Enter Your name"
              name="defaults"
              value={defaults}
              onChange={e => onInputChange(e)}
            />
          </div>
           
          

          <div className="form-group">
            <b>Uom default:</b>
            <input
              type="text"
              
              placeholder="Enter Your name"
              name="u_of_measurement"
              value={u_of_measurement}
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

export default AddFamily;
