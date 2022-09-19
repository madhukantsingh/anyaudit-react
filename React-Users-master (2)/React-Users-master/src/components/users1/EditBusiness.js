// import React,{Component} from 'react';
// import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

// export class EditBusiness extends Component{
//     constructor(props){
//         super(props);
//         this.state={deps:[],typ:[]};
        
//         this.handleSubmit=this.handleSubmit.bind(this);

//     }


//     componentDidMount(){
//         fetch('http://127.0.0.1:8000/type')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({deps:data});
//         });
//         fetch("http://localhost:8000/heads")
//       .then(response=>response.json())
//       .then(data=>{
//           this.setState({typ:data});
//            console.log("adsfadsfsaf,thar",data)
//       });
//     }







//     handleSubmit(event){
//         event.preventDefault();
//         fetch('http://127.0.0.1:8000/business',{
//             method:'PUT',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 id:event.target.id.value,
//                 name:event.target.name.value,
//                 description:event.target.description.value,
//                 location:event.target.location.value,
//                 products:event.target.products.value,
// 		            type:event.target.type.value,
// 		            IEAL:event.target.IEAL.value,
// 		            heads:event.target.heads.value

//             })
//         })
//         .then(res=>res.json())
//         .then((result)=>{
//             alert(result);
//         },
//         (error)=>{
//             alert('Failed');
//         })
//     }



 

//     render(){
//         return (
//             <div className="container">
//                  <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Edit Business</h2>

// {/* <Modal
// {...this.props}
// size="lg"
// aria-labelledby="contained-modal-title-vcenter"
// centered
// > */}
    
//     {/* <Modal.Body> */}

       
//                 <Form onSubmit={this.handleSubmit}>
//                 {/* <Form.Group controlId="id">
//                         <Form.Label>id</Form.Label>
//                         <Form.Control type="text" name="id" required 
//                         defaultValue={this.props.id}
//                         disabled
//                         placeholder="id"/>
                        
//                     </Form.Group> */}


//                     <Form.Group controlId="name">
//                         <Form.Label>name</Form.Label>

//                         <Form.Control type="text" name="name" required 
//                         defaultValue={this.props.name}
//                         placeholder="name"/>
//                     </Form.Group>
		
// 		                <Form.Group controlId="description">
//                         <Form.Label>description</Form.Label>
//                         <Form.Control type="text" name="description" required 
//                         defaultValue={this.props.description}
//                         placeholder="description"/>
//                     </Form.Group>
		    
// 		                <Form.Group controlId="location">
//                         <Form.Label>location</Form.Label>
//                         <Form.Control type="text" name="location" required 
//                         defaultValue={this.props.location}
//                         placeholder="location"/>
//                     </Form.Group>
 		  
// 		   <Form.Group controlId="products">
//                         <Form.Label>products</Form.Label>
//                         <Form.Control type="text" name="products" required 
//                         defaultValue={this.props.products}
//                         placeholder="products"/>
//                     </Form.Group>

//                     <Form.Group controlId="type">
//                         <Form.Label>type</Form.Label>
//                         <Form.Control as="select" defaultValue={this.props.type}>
//                         {this.state.deps.map(dep=>
//                             <option key={dep.tid}>{dep.type}</option>)}
//                         </Form.Control>
//                     </Form.Group>



		    
// 		  <Form.Group controlId="IEAL">
//                         <Form.Label>IEAL</Form.Label>
//                         <Form.Control type="text" name="IEAL" required 
//                         defaultValue={this.props.IEAL}
//                         placeholder="IEAL"/>
//                     </Form.Group>


//                     <Form.Group controlId="heads" className="col-md-6 form-group">
//                     <Form.Label>Heads</Form.Label>
//                         <Form.Control as="select" defaultValue={this.props.heads}>
//                         {this.state.typ.map(dep=>
//                             <option key={dep.id}>{dep.heads}</option>)}
//                         </Form.Control>
//                     </Form.Group>



//                     <Form.Group>
//                         <Button variant="primary" type="submit"
//                         onClick={this.props.onHide}>                      
//                           Update
//                         </Button>
//                     </Form.Group>
//                 </Form>
           
//     {/* </Modal.Body>
//      */}
//     {/* <Modal.Footer>
//         <Button variant="danger" onClick={this.props.onHide}>Close</Button>
//     </Modal.Footer> */}

// {/* </Modal> */}
        

//             </div>
//             </div>

//         )
//     }

// }

// export default EditBusiness


import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditBusiness extends Component{
    
    constructor(props) {
        super(props)
        
        this.state = {deps:[],typ:[]};
          // console.log("adsfadsfsaf")
          this.handleSubmit=this.handleSubmit.bind(this);
    
        
      };
      omponentDidMount() {
        let { id } = this.props.params;
        this.fetchData(id);
    }
     
      componentDidMount(){
        // console.log("adsfadsfsaf")
          fetch("http://localhost:8000/type")
          .then(response=>response.json())
          .then(data=>{
              this.setState({deps:data});
               console.log("adsfadsfsaf,thar",data)
          });
          fetch("http://localhost:8000/heads")
          .then(response=>response.json())
          .then(data=>{
              this.setState({typ:data});
               console.log("adsfadsfsaf,thar",data)
          });
      }
      

      handleSubmit(event){
        console.log(event)
        event.preventDefault();
        fetch(`http://127.0.0.1:8000//${id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:null,
                name:event.target.name.value,
                description:event.target.description.value,
                location:event.target.location.value,
                products:event.target.products.value,
                type:event.target.type.value,
                IEAL:event.target.IEAL.value,
                heads:event.target.heads.value
               
              
    
                
    
    
            })
        })
        .then(res=>res.json())
        .then((result)=>{
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
        <h2 className="text-center mb-4">Edit A Company</h2>
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
		<Form.Group controlId="products" className="col-md-6 form-group">
                        <b>Products</b>
                        <Form.Control type="text" name="products" required 
                        placeholder="products"/>
                    </Form.Group>

                    <Form.Group controlId="type" className="col-md-6 form-group">
                        <b>Type</b>
                        <Form.Control as="select">
                        {this.state.deps.map(dep=>
                            <option key={dep.tid}>{dep.type}</option>)}
                        </Form.Control>
                    </Form.Group>

			<Form.Group controlId="IEAL" className="col-md-6 form-group">
                        <b>IEAL</b>
                        <Form.Control type="text" name="IEAL" required 
                        placeholder="IEAL"/>
                    </Form.Group>

                    <Form.Group controlId="heads" className="col-md-6 form-group">
                        <b>Heads</b>
                        <Form.Control as="select">
                        {this.state.typ.map(dep=>
                            <option key={dep.id}>{dep.heads}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="description" className="col-md-6 form-group">
                        <b>Description</b>
                        <Form.Control as="textarea" rows="3"type="textarea" name="description" required 
                        placeholder="description"/>
                    </Form.Group>

                    

                    <Form.Group>
                        <Button variant="primary" type="submit"
                          onClick={this.props.onHide}>
                            Update
                        </Button>
                    </Form.Group>
                    </div>
                </Form>
    
      </div>
    </div>
  );
                        }
};

export default EditBusiness;


// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useHistory, useParams } from "react-router-dom";

// // const EditUser = () => {
// //   let history = useHistory();
// //   const { id } = useParams();
// //   const [user, setUser] = useState({
    
// //     name: "",
// //     products: "",
// //     location: "",  
// //     description: "",
// //     IEAL: "",
// //     type:"",
// //     heads:""
// //   });

// //   const {  name, products, location, description, IEAL,type,heads } = user;
// //   const onInputChange = e => {
// //     setUser({ ...user, [e.target.name]: e.target.value });
// //   };

// //   useEffect(() => {
// //     loadUser();
// //   }, []);

// //   const onSubmit = async e => {
// //     e.preventDefault();
// //     await axios.put(`http://127.0.0.1:8000/business/${id}`, user);
// //     history.push("/");
// //   };

// //   const loadUser = async () => {
// //     const result = await axios.get(`http://127.0.0.1:8000/business/${id}`);
// //     setUser(result.data);
// //   };

// import React,{Component} from 'react';
// import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

// export class EditBusiness extends Component{
//     constructor(props){
//         super(props);
//         this.state={deps:[]};
//         this.handleSubmit=this.handleSubmit.bind(this);

//     }


//     componentDidMount(){
//         fetch('http://127.0.0.1:8000/type')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({deps:data});
//         });
//         fetch('http://127.0.0.1:8000/business/3')
//         .then(response=>response.json())
//         .then(id=>{
//             this.setState({id:id});
//         });
//     }

//     handleSubmit(event){
//         event.preventDefault();
//         fetch('http://127.0.0.1:8000/business/3',{
//             method:'PUT',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 id:event.target.id.value,
//                 name:event.target.name.value,
//                 description:event.target.description.value,
//                 location:event.target.location.value,
//                 products:event.target.products.value,
// 		        type:event.target.type.value,
// 		        IEAL:event.target.IEAL.value,
// 		        heads:event.target.heads.value

//             })
//         })
//         .then(res=>res.json())
//         .then((result)=>{
//             alert(result);
//         },
//         (error)=>{
//             alert('Failed');
//         })
//     }

//     render() {

//   return (

//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Edit Business</h2>
//         <form >
//         {/* // onSubmit={e => onSubmit(e)}> */} 
//         {/* <div className="form-group">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <b>ID:</b>&nbsp;&nbsp;&nbsp;
//             <input
//               type="text"
              
//               placeholder="Enter ID"
//               name="id"
//               // value={id}
//               // onChange={e => onInputChange(e)}
//             />
//           </div><p></p> */}
         
//           <div className="form-group">
//           <b>Name:</b>&nbsp;&nbsp;&nbsp;
//             <input
//               type="text"
              
//               placeholder="Enter Your name"
//               name="name"
//               // value={name}
//               // onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//           <b>Location:</b>&nbsp;&nbsp;&nbsp;&nbsp;
//             <input
//               type="location"
             
//               placeholder="Enter Your E-mail"
//               name="location"
//               // value={location}
//               // onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//           <b>products:</b>&nbsp;&nbsp;
//             <input
//               type="text"
              
//               placeholder="Enter Your Phone Number"
//               name="products"
//               // value={products}
//               // onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">&nbsp;&nbsp;
//           <b>PAN:</b>&nbsp;&nbsp;&nbsp;&nbsp; 
//             <input
//               type="text"
            
//               placeholder="Enter Your Pan"
//               name="description"
//               // value={description}
//               // onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//           <b>CIN NO:</b>&nbsp;
//             <input
//               type="text"
//               // className="form-control"
//               placeholder="Enter CIN NO"
//               name="IEAL"
//               // value={IEAL}
//               // onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//           <b>CIN NO:</b>&nbsp;
//             <input
//               type="text"
//               // className="form-control"
//               placeholder="Enter CIN NO"
//               name="heads"
//               // value={heads}
//               // onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//           <b>CIN NO:</b>&nbsp;
//             <input
//               type="text"
//               // className="form-control"
//               placeholder="Enter CIN NO"
//               name="type"
//               // value={type}
//               // onChange={e => onInputChange(e)}
//             />
//           </div>
//           <button className="btn btn-warning btn-block">Update</button>
//         </form>
//       </div>
//     </div>
  
//   );
//     }
// };

// export default EditBusiness;
<<<<<<< HEAD
=======


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useHistory, useParams } from "react-router-dom";

// const EditUser = () => {
//   let history = useHistory();
//   const { id } = useParams();
//   const [user, setUser] = useState({
    
//     name: "",
//     products: "",
//     location: "",  
//     description: "",
//     IEAL: "",
//     type:"",
//     heads:""
//   });

//   const {  name, products, location, description, IEAL,type,heads } = user;
//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.put(`http://127.0.0.1:8000//${id}`, user);
//     history.push("/");
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://127.0.0.1:8000//${id}`);
//     setUser(result.data);
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Edit Business</h2>
//         <form onSubmit={e => onSubmit(e)}>
//         <div className="form-group">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <b>ID:</b>&nbsp;&nbsp;&nbsp;
//             <input
//               type="text"
              
//               placeholder="Enter ID"
//               name="id"
//               value={id}
//               onChange={e => onInputChange(e)}
//             />
//           </div><p></p>
         
//           <div className="form-group">
//           <b>Name:</b>&nbsp;&nbsp;&nbsp;
//             <input
//               type="text"
              
//               placeholder="Enter Your name"
//               name="name"
//               value={name}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//           <b>Location:</b>&nbsp;&nbsp;&nbsp;&nbsp;
//             <input
//               type="location"
             
//               placeholder="Enter Your E-mail"
//               name="location"
//               value={location}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//           <b>products:</b>&nbsp;&nbsp;
//             <input
//               type="text"
              
//               placeholder="Enter Your Phone Number"
//               name="products"
//               value={products}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">&nbsp;&nbsp;
//           <b>PAN:</b>&nbsp;&nbsp;&nbsp;&nbsp; 
//             <input
//               type="text"
            
//               placeholder="Enter Your Pan"
//               name="description"
//               value={description}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//           <b>CIN NO:</b>&nbsp;
//             <input
//               type="text"
//               // className="form-control"
//               placeholder="Enter CIN NO"
//               name="IEAL"
//               value={IEAL}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//           <b>CIN NO:</b>&nbsp;
//             <input
//               type="text"
//               // className="form-control"
//               placeholder="Enter CIN NO"
//               name="heads"
//               value={heads}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//           <b>CIN NO:</b>&nbsp;
//             <input
//               type="text"
//               // className="form-control"
//               placeholder="Enter CIN NO"
//               name="type"
//               value={type}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <button className="btn btn-warning btn-block">Update</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditUser;


import React,{ useEffect, useState } from "react";

function EditBusiness(){
    const [users,setUser]=useState([])
    const [name, setName]=useState("");
    const [location, setLocation]=useState("");
    const [products, setProducts]=useState("");
    const [type, setType]=useState("");
    const [IEAL, setIEAL]=useState("");
    const [heads, setHeads]=useState("");
    const [description, setDescription]=useState("");
    const [userId, setUserId]=useState(null)

    useEffect(()=>{
        getUsers();
    },[])
    function getUsers() {
        fetch("http://localhost:8000/business/").then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                setUser(resp)
                setName(resp)
                setLocation(resp)
                setDescription(resp)
                setProducts(resp)
                setType(resp)
                setIEAL(resp)
                setHeads(resp)
                setUserId(resp[0].id)
            })
        })
      }

                function selectUser(id){
                    let item=users[id-1];
                    setName(item.name)
                    setLocation(item.location)
                    setHeads(item.heads)
                    setDescription(item.description)
                    setIEAL(item.IEAL)
                    setProducts(item.products)
                    setType(item.type)
                    setUserId(item.id)
                }
     function updateUser()
     {
        let item={name,location,heads,description,IEAL,products,type}
    console.warn("item",item)
    fetch(`http://localhost:8000/business/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
     }

  {
    let item={name,location,products,description,type,heads,IEAL}
    console.warn("item",item)
    fetch(`http://localhost:8000/business/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }

                
  return (
    <div className="App">
      <h1>Update User Data With API </h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          {/* <tr>
            <td>name</td>
            <td>location</td>
            <td>products</td>
            <td>description</td>
            <td>type</td>
            <td>heads</td>
            <td>IEAL</td>
            
          </tr> */}
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.products}</td>
                <td>{item.description}</td>
                <td>{item.type}</td>
                <td>{item.heads}</td>
                <td>{item.IEAL}</td>

                {/* <td><button onClick={() => deleteUser(item.id)}>Delete</button></td> */}
                <td><button onClick={() => selectUser(item.id)}>Update</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}} /> <br /><br />
        <input type="text" value={products}  onChange={(e)=>{setProducts(e.target.value)}} /> <br /><br />
        <input type="text" value={description}  onChange={(e)=>{setDescription(e.target.value)}} /> <br /><br />
        <input type="text" value={type}  onChange={(e)=>{setType(e.target.value)}} /> <br /><br />
        <input type="text" value={heads}  onChange={(e)=>{setHeads(e.target.value)}} /> <br /><br />
        <input type="text" value={IEAL}  onChange={(e)=>{setIEAL(e.target.value)}} /> <br /><br />
        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );

}
export default EditBusiness
>>>>>>> 51f18fb4b0f891f5305214071b08fe991cdcdfd1
