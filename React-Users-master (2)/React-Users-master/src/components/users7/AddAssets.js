import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddContact = () => {
  let history = useHistory();
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

  const { name,location,area,fmv,sdv,left,right,front,back,attacthment} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  function handleChange(event) {
    setFile(event.target.files [0])
  }

  const onSubmit = async e => { console.log(user)
    e.preventDefault();
    await axios.post("http://127.0.0.1:8000/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">

        <h1 className="text-center mb-4">Assets Form</h1>
        <center>
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
          
          &nbsp;&nbsp; <b>File:</b>&nbsp;
          <input type="file"  value={attacthment} onChange={handleChange}/>
          
          &nbsp;&nbsp;
          <br></br>
        
           <br></br> <button  className="btn btn-primary ">Submit </button>
           

           
        </form>
        </center>
      </div>
    </div>
  );
};

export default AddContact;
