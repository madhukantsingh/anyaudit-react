import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditTypes = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    
    type: "",
   
  });

  const {  type } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/type/${id}`, user)
    .then(res=>res.json())
    .then((result)=>{
        alert(result);

    },
    (error)=>{
        alert('Updated Sucessfully');
    });
    history.push("/types");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/type/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Types</h2>
        <form onSubmit={e => onSubmit(e)}>
        
         
          <div className="form-group">
          <b>Name:</b>&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              
              placeholder="Enter Your type"
              name="type"
              value={type}
              onChange={e => onInputChange(e)}
            />
          </div>
       
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditTypes;
