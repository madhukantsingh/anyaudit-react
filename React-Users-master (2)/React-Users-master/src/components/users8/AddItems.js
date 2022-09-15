import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddItems = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    
    items: ""
    
  });

  const { items } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => { console.log(user)
    e.preventDefault(); 
    await axios.post("http://127.0.0.1:8000/items", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Items</h2>
        <center>
        <form onSubmit={e => onSubmit(e)}>
        
         
          <div className="form-group">
            <b>Name:</b>&nbsp;
            <input
              type="text"
             
              placeholder="Enter Your name"
              name="items"
              value={items}
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

export default AddItems    ;
