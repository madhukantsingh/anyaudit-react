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

export default AddBusiness

