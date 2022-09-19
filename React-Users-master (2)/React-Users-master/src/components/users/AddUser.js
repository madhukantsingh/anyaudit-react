import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddUser extends Component{
  constructor(props) {
    super(props)
    this.state = {deps:[]};
      // console.log("adsfadsfsaf")
      this.handleSubmit=this.handleSubmit.bind(this);

    
  };ponentDidM
  comount(){
    // console.log("adsfadsfsaf")
      fetch("http://localhost:8000/sister")
      .then(response=>response.json())
      .then(data=>{
          this.setState({deps:data});
           console.log("adsfadsfsaf,thar",data)
      });
     
  }
  



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
        
        <Form onSubmit={this.handleSubmit}>
        <div className="row">
                    <Form.Group controlId="name"className="col-md-6 form-group">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" required 
                        placeholder="name"/>
                    </Form.Group>

		  

		   <Form.Group controlId="email" className="col-md-6 form-group">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" name="email" required 
                        placeholder="email"/>
                    </Form.Group>
		<Form.Group controlId="phone" className="col-md-6 form-group" >
                        <Form.Label>Products</Form.Label>
                        <Form.Control type="text" name="phone" required 
                        placeholder="phone"/>
                    </Form.Group>
                   
                    <Form.Group controlId="cinno" className="col-md-6 form-group">
                        <Form.Label>Cin No</Form.Label>
                        <Form.Control type="text" name="cinno" required 
                        placeholder="cinno"/>
                    </Form.Group>

                    <Form.Group controlId="sister" className="col-md-6 form-group">
                        <Form.Label>Sister</Form.Label>
                        <Form.Control as="select">
                        {this.state.deps.map(dep=>
                            <option key={dep.id}>{dep.sister}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="pan" className="col-md-6 form-group">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" type="textarea" name="description" required 
                        placeholder="description"/>
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
  );
        }
}

export default AddUser