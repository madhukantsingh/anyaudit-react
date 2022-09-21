import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditHeads = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    
    heads: "",
    
  });

  const {  heads} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/heads/${id}`, user)
    .then(res=>res.json())
    .then((result)=>{
        alert(result);

    },
    (error)=>{
        alert('Updated Sucessfully');
    });
    history.push("/heads");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/heads/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Heads</h2>
        <form onSubmit={e => onSubmit(e)}>
        
         
          <div className="form-group">
          <b>Name:</b>&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              
              placeholder="Enter Your name"
              name="heads"
              value={heads}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditHeads;
