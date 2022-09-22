// import React, { useState } from "react";
// import axios from 'axios'
// import { useHistory } from "react-router-dom";

// const AddContact = () => {
//   let history = useHistory();
//   const [user,setFile, setUser] = useState({
    
//     name: "",
//     location:"",
//     area:"",
//     fmv:"",
//     sdv:"",

//     left:"",
//     right:"",
//     front:"",
//     back:"",
//     attacthment:""
    
//   });

//   const { name,location,area,fmv,sdv,left,right,front,back,attacthment} = user;
//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   function handleChange(event) {
//     setFile(event.target.files [0])
//   }

//   const onSubmit = async e => { console.log(user)
//     e.preventDefault();
//     await axios.post("http://127.0.0.1:8000/users", user);
//     history.push("/");
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">

//         <h1 className="text-center mb-4">Assets Form</h1>
//         <center>
//         <form onSubmit={e => onSubmit(e)}>
        
         
//           <div className="form-group">
//             <b>Name:</b>
//             <input
//               type="text"
              
//               placeholder="Enter Your name"
//               name="name"
//               value={name}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <b>Location:</b>
//             <input
//               type="text"
             
//               placeholder="Enter Your name"
//               name="location"
//               value={location}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div>
//             <b>Type:</b>
//       <select  className="form-group">
//         <option value="select">select</option>
//         <option value="uom1">1</option>
//         <option value="uom2">2</option>
//       </select>&nbsp; &nbsp;
//      </div> 
//           <div className="form-group">
//             <b>Area:</b>
//             <input
//               type="text"
              
//               placeholder="Enter Your name"
//               name="area"
//               value={area}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <b>FMV:</b>
//             <input
//               type="text"
            
//               placeholder="Enter Your name"
//               name="fmv"
//               value={fmv}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <b>SDV:</b>
//             <input
//               type="text"
              
//               placeholder="Enter Your name"
//               name="sdv"
//               value={sdv}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <tr/>
//           <hr></hr>
//           <h3>Boundries</h3>
//           <div className="form-group">
//             <b>Left:</b>
//             <input
//               type="text"
             
//               placeholder="Enter Your name"
//               name="left"
//               value={left}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <b>Right:</b>
//             <input
//               type="text"
//             //   className="form-control form-control-lg"
//               placeholder="Enter Your name"
//               name="right"
//               value={right}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <b>Front:</b>
//             <input
//               type="text"
//             //   className="form-control form-control-lg"
//               placeholder="Enter Your name"
//               name="front"
//               value={front}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <b>Back:</b>
//             <input
//               type="text"
//             //   className="form-control form-control-lg"
//               placeholder="Enter Your name"
//               name="back"
//               value={back}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
          
//           &nbsp;&nbsp; <b>File:</b>&nbsp;
//           <input type="file"  value={attacthment} onChange={handleChange}/>
          
//           &nbsp;&nbsp;
//           <br></br>
        
//            <br></br> <button  className="btn btn-primary ">Submit </button>
           

           
//         </form>
//         </center>
//       </div>
//     </div>
//   );
// };

// export default AddContact;





import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddAssets extends Component{
  constructor(props) {
    super(props)
    this.state = {deps:[]};
      // console.log("adsfadsfsaf")
      this.handleSubmit=this.handleSubmit.bind(this);

    
  };
  componentDidMount(){
    // console.log("adsfadsfsaf")
      fetch("http://localhost:8000/assetstype")
      .then(response=>response.json())
      .then(data=>{
          this.setState({deps:data});
           console.log("adsfadsfsaf,thar",data)
      });
    
  }
  



  handleSubmit(event){
    
    event.preventDefault();
    fetch("http://localhost:8000/assets",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:null,
            name:event.target.name.value,
            location:event.target.location.value,
            assetstype:event.target.assetstype.value,
            area:event.target.area.value,
            fmv:event.target.fmv.value,
            sdv:event.target.sdv.value,
            left:event.target.left.value,
            right:event.target.right.value,
            front:event.target.front.value,
            back:event.target.back.value,
            attacthment:event.target.attacthment.value


        })
    })
    .then(res=>res.json())
    .then((result)=>{
        console.log(result,"taaaaa")
        alert(result);

    },
    (error)=>{
        alert('Failed');
    })
}
render(){
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Assets</h2>
        <div className="col-md-12">

           
        <Form onSubmit={this.handleSubmit}>
        <div className="row">
                    <Form.Group controlId="name" className="col-md-6 form-group">
                        <b>Name</b>
                        <Form.Control type="text" name="name" required 
                        placeholder="name"/>
                    </Form.Group>

		  

		   <Form.Group controlId="location" className="col-md-6 form-group">
                        <b>Location</b>
                        <Form.Control type="text" name="location" required 
                        placeholder="location"/>
                    </Form.Group>

                    <Form.Group controlId="assetstype" className="col-md-6 form-group">
                        <b>assetstype</b>
                        <Form.Control as="select">
                        {this.state.deps.map(dep=>
                            <option key={dep.id}>{dep.assetstype}</option>)}
                        </Form.Control>
                    </Form.Group>

			<Form.Group controlId="area" className="col-md-6 form-group">
                        <b>Area</b>
                        <Form.Control type="text" name="area" required 
                        placeholder="area"/>
                    </Form.Group>

                    <Form.Group controlId="fmv" className="col-md-6 form-group">
                        <b>FMV</b>
                        <Form.Control type="text" name="fmv" required 
                        placeholder="fmv"/>
                    </Form.Group>

                    <Form.Group controlId="sdv" className="col-md-6 form-group">
                        <b>SDV</b>
                        <Form.Control type="text" name="sdv" required 
                        placeholder="sdv"/>
                    </Form.Group>

                      <hr></hr>
                      
                    <Form.Group controlId="left" className="col-md-6 form-group">
                        <b>Left</b>
                        <Form.Control type="text" name="left" required 
                        placeholder="left"/>
                    </Form.Group>
                    <Form.Group controlId="right" className="col-md-6 form-group">
                        <b>Right</b>
                        <Form.Control type="text" name="right" required 
                        placeholder="right"/>
                    </Form.Group>
                    <Form.Group controlId="front" className="col-md-6 form-group">
                        <b>Front</b>
                        <Form.Control type="text" name="front" required 
                        placeholder="front"/>
                    </Form.Group>
                    <Form.Group controlId="back" className="col-md-6 form-group">
                        <b>Back</b>
                        <Form.Control type="text" name="back" required 
                        placeholder="back"/>
                    </Form.Group>
                    <Form.Group controlId="attacthment" className="col-md-6 form-group">
                        <b>File</b>
                        <Form.Control type="file" name="attacthment" 
                        placeholder="attacthment"/>
                    </Form.Group>

                  

                    

                    <Form.Group>
                        <Button variant="primary" type="submit"
                          onClick={this.props.onHide}>
                            Submit
                        </Button>
                    </Form.Group>
                    </div>
                </Form>

                

        </div>
      </div>
    </div>
  );
        }
}

export default AddAssets


