// import React,{Component} from 'react';
// import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

// console.log("adsfadsfsaf")

// export class AddBusiness extends Component{
  
//     constructor(props){
//         super(props);
//         this.state={deps:[],typ:[]};
//         // console.log("adsfadsfsaf")
//         this.handleSubmit=this.handleSubmit.bind(this);
        
//     }


   
//      componentDidMount(){
//      console.log("adsfadsfsaf")
//     fetch('http://localhost:8000/type')
//           .then((response)=>response.json())
//           .then((data)=>{
//              this.setState({deps:data});
//      })
    
//          fetch('http://localhost:8000/items')
//          .then((response)=>response.json())
//          .then((data)=>{
//             this.setState({typ:data});
//          })
      

        
//     }

//     handleSubmit(event){
//         event.preventDefault();
//         fetch("http://localhost:8000/business",{
//             method:'POST',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 id:null,
//                 name:event.target.name.value,
//                 description:event.target.description.value,
//                 location:event.target.location.value,
//                 products:event.target.products.value,
// 		            type:event.target.type.value,
//                     items:event.target.items.value,
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

// <Modal
// {...this.props}
// size="lg"
// aria-labelledby="contained-modal-title-vcenter"
// centered
// >
//     <Modal.Header clooseButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//             Add
//         </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>

//         <Row>
//             <Col sm={6}>
//                 <Form onSubmit={this.handleSubmit}>
//                     <Form.Group controlId="name">
//                         <Form.Label>name</Form.Label>
//                         <Form.Control type="text" name="name" required 
//                         placeholder="name"/>
//                     </Form.Group>

// 		   <Form.Group controlId="description">
//                         <Form.Label>description</Form.Label>
//                         <Form.Control type="text" name="description" required 
//                         placeholder="description"/>
//                     </Form.Group>

// 		   <Form.Group controlId="location">
//                         <Form.Label>location</Form.Label>
//                         <Form.Control type="text" name="location" required 
//                         placeholder="location"/>
//                     </Form.Group>
// 		<Form.Group controlId="products">
//                         <Form.Label>products</Form.Label>
//                         <Form.Control type="text" name="products" required 
//                         placeholder="products"/>
//                     </Form.Group>

//                     <Form.Group controlId="type">
//                         <Form.Label>type</Form.Label>
//                         <Form.Control as="select">
//                         {this.state.deps.map(dep=>
//                             <option key={dep.tid}>{dep.type}</option>)}
//                         </Form.Control>
//                     </Form.Group>


//                     <Form.Group controlId="items">
//                         <Form.Label> items </Form.Label>
//                         <Form.Control as="select">
//                         {this.state.typ.map(ty=>
//                             <option key={ty.id}>{ty.items}</option>)}
//                         </Form.Control>
//                     </Form.Group>

// 			<Form.Group controlId="IEAL">
//                         <Form.Label>IEAL</Form.Label>
//                         <Form.Control type="text" name="IEAL" required 
//                         placeholder="IEAL"/>
//                     </Form.Group>

// 			<Form.Group controlId="heads">
//                         <Form.Label>heads</Form.Label>
//                         <Form.Control type="text" name="heads" required 
//                         placeholder="heads"/>
//                     </Form.Group>

                    

//                     <Form.Group>
//                         <Button variant="primary" type="submit"
//                           onClick={this.props.onHide}>
//                             Add Business
//                         </Button>
//                     </Form.Group>
//                 </Form>
//             </Col>

           
//         </Row>
//     </Modal.Body>
    
//     {/* <Modal.Footer>
//         <Button variant="danger" onClick={this.props.onHide}>Close</Button>
//     </Modal.Footer> */}

// </Modal>

//             </div>
//         )
//     }

// }


import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddBusiness extends Component{
  constructor(props) {
    super(props)
    this.state = {deps:[],typ:[]};
      // console.log("adsfadsfsaf")
      this.handleSubmit=this.handleSubmit.bind(this);

    
  };
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
    fetch("http://localhost:8000/business",{
        method:'POST',
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
        <h2 className="text-center mb-4">Business</h2>
        <center>
        <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" name="name" required 
                        placeholder="name"/>
                    </Form.Group>

		   <Form.Group controlId="description">
                        <Form.Label>description</Form.Label>
                        <Form.Control type="text" name="description" required 
                        placeholder="description"/>
                    </Form.Group>

		   <Form.Group controlId="location">
                        <Form.Label>location</Form.Label>
                        <Form.Control type="text" name="location" required 
                        placeholder="location"/>
                    </Form.Group>
		<Form.Group controlId="products">
                        <Form.Label>products</Form.Label>
                        <Form.Control type="text" name="products" required 
                        placeholder="products"/>
                    </Form.Group>

                    <Form.Group controlId="type">
                        <Form.Label>type</Form.Label>
                        <Form.Control as="select">
                        {this.state.deps.map(dep=>
                            <option key={dep.tid}>{dep.type}</option>)}
                        </Form.Control>
                    </Form.Group>

			<Form.Group controlId="IEAL">
                        <Form.Label>IEAL</Form.Label>
                        <Form.Control type="text" name="IEAL" required 
                        placeholder="IEAL"/>
                    </Form.Group>

                    <Form.Group controlId="heads">
                        <Form.Label>heads</Form.Label>
                        <Form.Control as="select">
                        {this.state.typ.map(dep=>
                            <option key={dep.id}>{dep.heads}</option>)}
                        </Form.Control>
                    </Form.Group>

                    

                    <Form.Group>
                        <Button variant="primary" type="submit"
                          onClick={this.props.onHide}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
        </center>
      </div>
    </div>
  );
        }
}

export default AddBusiness

