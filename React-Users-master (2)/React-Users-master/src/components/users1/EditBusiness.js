import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditBusiness extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);

    }


    componentDidMount(){
        fetch('http://127.0.0.1:8000/type')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://127.0.0.1:8000/business',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:event.target.id.value,
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

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Business
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="id">
                        <Form.Label>id</Form.Label>
                        <Form.Control type="text" name="id" required 
                        defaultValue={this.props.id}
                        disabled
                        placeholder="id"/>
                        
                    </Form.Group>


                    <Form.Group controlId="name">
                        <Form.Label>name</Form.Label>

                        <Form.Control type="text" name="name" required 
                        defaultValue={this.props.name}
                        placeholder="name"/>
                    </Form.Group>
		
		                <Form.Group controlId="description">
                        <Form.Label>description</Form.Label>
                        <Form.Control type="text" name="description" required 
                        defaultValue={this.props.description}
                        placeholder="description"/>
                    </Form.Group>
		    
		                <Form.Group controlId="location">
                        <Form.Label>location</Form.Label>
                        <Form.Control type="text" name="location" required 
                        defaultValue={this.props.location}
                        placeholder="location"/>
                    </Form.Group>
 		  
		   <Form.Group controlId="products">
                        <Form.Label>products</Form.Label>
                        <Form.Control type="text" name="products" required 
                        defaultValue={this.props.products}
                        placeholder="products"/>
                    </Form.Group>

                    <Form.Group controlId="type">
                        <Form.Label>type</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.type}>
                        {this.state.deps.map(dep=>
                            <option key={dep.id}>{dep.type}</option>)}
                        </Form.Control>
                    </Form.Group>



		    
		  <Form.Group controlId="IEAL">
                        <Form.Label>IEAL</Form.Label>
                        <Form.Control type="text" name="IEAL" required 
                        defaultValue={this.props.IEAL}
                        placeholder="IEAL"/>
                    </Form.Group>


		  <Form.Group controlId="heads">
                        <Form.Label>heads</Form.Label>
                        <Form.Control type="text" name="heads" required 
                        defaultValue={this.props.heads}
                        placeholder="heads"/>
                    </Form.Group>



                    <Form.Group>
                        <Button variant="primary" type="submit"
                        onClick={this.props.onHide}>                      
                          Update
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

        </Row>
    </Modal.Body>
    
    {/* <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer> */}

</Modal>
        

            </div>

        )
    }

}