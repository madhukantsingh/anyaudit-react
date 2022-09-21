import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditAssets = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user,setFile, setUser] = useState({
    
    name: "",
    location:"",
    area:"",
    fmv:"",
    sdv:"",

    left:"",
    right:"",
    front:"",
    back:"",
    attacthment:""
  });

  const { name,location,area,fmv,sdv,left,right,front,back,attacthment } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  function handleChange(event) {
    setFile(event.target.files [0])
  }
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/${id}`, user)
    .then(res=>res.json())
    .then((result)=>{
        alert(result);

    },
    (error)=>{
        alert('Updated Sucessfully');
    });
    history.push("/assetstype");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Assets</h2>
        <form onSubmit={e => onSubmit(e)}>
       
        <div className="form-group">
            <b>Name:</b>
            <input
              type="text"
              
              placeholder="Enter Your name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <b>Location:</b>
            <input
              type="text"
             
              placeholder="Enter Your name"
              name="location"
              value={location}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <b>Type:</b>
      <select  className="form-group">
        <option value="select">select</option>
        <option value="uom1">1</option>
        <option value="uom2">2</option>
      </select>&nbsp; &nbsp;
     </div> 
          <div className="form-group">
            <b>Area:</b>
            <input
              type="text"
              
              placeholder="Enter Your name"
              name="area"
              value={area}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <b>FMV:</b>
            <input
              type="text"
            
              placeholder="Enter Your name"
              name="fmv"
              value={fmv}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <b>SDV:</b>
            <input
              type="text"
              
              placeholder="Enter Your name"
              name="sdv"
              value={sdv}
              onChange={e => onInputChange(e)}
            />
          </div>
          <tr/>
          <hr></hr>
          <h3>Boundries</h3>
          <div className="form-group">
            <b>Left:</b>
            <input
              type="text"
             
              placeholder="Enter Your name"
              name="left"
              value={left}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <b>Right:</b>
            <input
              type="text"
            //   className="form-control form-control-lg"
              placeholder="Enter Your name"
              name="right"
              value={right}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <b>Front:</b>
            <input
              type="text"
            //   className="form-control form-control-lg"
              placeholder="Enter Your name"
              name="front"
              value={front}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <b>Back:</b>
            <input
              type="text"
            //   className="form-control form-control-lg"
              placeholder="Enter Your name"
              name="back"
              value={back}
              onChange={e => onInputChange(e)}
            />
          </div>
          <input type="file"  value={attacthment} onChange={handleChange}/>
          
          &nbsp;&nbsp;
          <br></br>
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditAssets;
