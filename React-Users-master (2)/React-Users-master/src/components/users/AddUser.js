import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddUser extends Component{
  constructor(props) {
    super(props)
    this.state = {deps:[],typ:[]};
      // console.log("adsfadsfsaf")
      this.handleSubmit=this.handleSubmit.bind(this);

    
  };
//   componentDidMount(){
//     // console.log("adsfadsfsaf")
//       fetch("http://localhost:8000/type")
//       .then(response=>response.json())
//       .then(data=>{
//           this.setState({deps:data});
//            console.log("adsfadsfsaf,thar",data)
//       });
     
//   }
  



  handleSubmit(event){
    console.log(event)
    event.preventDefault();
    fetch("http://localhost:8000/company",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:null,
            name:event.target.name.value,
            pan:event.target.pan.value,
            email:event.target.email.value,
            phone:event.target.phone.value,
            cino:event.target.cino.value,
            sister:event.target.sister.value,
            

           
           
          

            


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
        <h2 className="text-center mb-4">Company</h2>
        <center>
        <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" name="name" required 
                        placeholder="name"/>
                    </Form.Group>

		   <Form.Group controlId="pan">
                        <Form.Label>description</Form.Label>
                        <Form.Control type="text" name="pan" required 
                        placeholder="pan"/>
                    </Form.Group>

		   <Form.Group controlId="email">
                        <Form.Label>location</Form.Label>
                        <Form.Control type="text" name="email" required 
                        placeholder="email"/>
                    </Form.Group>
		<Form.Group controlId="phone">
                        <Form.Label>products</Form.Label>
                        <Form.Control type="text" name="phone" required 
                        placeholder="phone"/>
                    </Form.Group>
                   
                    <Form.Group controlId="cinno">
                        <Form.Label>Cin No</Form.Label>
                        <Form.Control type="text" name="cinno" required 
                        placeholder="cinno"/>
                    </Form.Group>

                    <Form.Group controlId="sister">
                        <Form.Label>Sister</Form.Label>
                        <Form.Control as="select">
                        {this.state.deps.map(dep=>
                            <option key={dep.tid}>{dep.sister}</option>)}
                        </Form.Control>
                    </Form.Group>

			{/* <Form.Group controlId="IEAL">
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
                    </Form.Group> */}

                    

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

export default AddUser