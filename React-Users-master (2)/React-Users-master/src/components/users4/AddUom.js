import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {Modal,Button, Row, Col, Form, FormLabel} from 'react-bootstrap';

export class AddUom extends Component{
  constructor(props) {
    super(props)
    this.state = {deps:[]};
      // console.log("adsfadsfsaf")
      this.handleSubmit=this.handleSubmit.bind(this);

    
  };
  componentDidMount(){
    // console.log("adsfadsfsaf")
      fetch("http://localhost:8000/family")
      .then(response=>response.json())
      .then(data=>{
          this.setState({deps:data});
           console.log("adsfadsfsaf,thar",data)
      });
      
  }
  
  handleSubmit(event){
    console.log(event)
    event.preventDefault();
    fetch("http://localhost:8000/uom",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:null,
            name:event.target.name.value,
            measure:event.target.measure.value
            

            


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
        <h2 className="text-center mb-4">UOM</h2>
        <div className="col-md-12">

           
        <Form onSubmit={this.handleSubmit}>
        <div className="row">

                    <Form.Group controlId="name" className="col-md-6 form-group">
                       <FormLabel>name</FormLabel>
                        <Form.Control as="select">
                        {this.state.deps.map(uom=>
                            <option key={uom.id}>{uom.name}</option>)}
                        </Form.Control>
                    </Form.Group>

			<Form.Group controlId="measure" className="col-md-6 form-group">
       <FormLabel>measure</FormLabel>
                      <Form.Control type="text" name="measure" required 
                        placeholder="measure"/>
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

export default AddUom

