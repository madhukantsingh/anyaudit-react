import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddProductsname extends Component{
  constructor(props) {
    super(props)
    this.state = {deps:[]};
      // console.log("adsfadsfsaf")
      this.handleSubmit=this.handleSubmit.bind(this);

    
  };
  componentDidMount(){
    // console.log("adsfadsfsaf")
      fetch("http://localhost:8000/uom")
      .then(response=>response.json())
      .then(data=>{
          this.setState({deps:data});
           console.log("adsfadsfsaf,thar",data)
      });
      
  }
  



  handleSubmit(event){
    console.log(event)
    event.preventDefault();
    fetch("http://localhost:8000/products",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:null,
            product_name:event.target.product_name.value,
            UOM:event.target.UOM.value,
           
           


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
        <h2 className="text-center mb-4">Products Name</h2>
        <div className="col-md-12">

           
        <Form onSubmit={this.handleSubmit}>
        <div className="row">
                    <Form.Group controlId="product_name" className="col-md-6 form-group">
                        <b>Name</b>
                        <Form.Control type="text" name="name" required 
                        placeholder="name"/>
                    </Form.Group>

		  

                    <Form.Group controlId="UOM" className="col-md-6 form-group">
                        <b>Uom</b>
                        <Form.Control as="select">
                        {this.state.deps.map(dep=>
                            <option key={dep.id}>{dep.name}</option>)}
                        </Form.Control>
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

export default AddProductsname

