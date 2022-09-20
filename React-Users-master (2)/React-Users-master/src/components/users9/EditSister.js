import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditSister = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    
    sister: "",
    
  });

  const {  sister} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/sister/${id}`, user)
    .then(res=>res.json())
    .then((result)=>{
        alert(result);

    },
    (error)=>{
        alert('Updated Sucessfully');
    });
    history.push("/sister");  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/sister/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Sister</h2>
        <form onSubmit={e => onSubmit(e)}>
        
         
          <div className="form-group">
          <b>Name:</b>&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              
              placeholder="Enter Your name"
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

export default EditSister;
