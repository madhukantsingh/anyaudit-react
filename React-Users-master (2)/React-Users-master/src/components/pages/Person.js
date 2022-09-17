// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import {Form, Button, Row, Col} from 'react-bootstrap';
// const Person = () => {
//   const [roomType, setRoomType] = useState('');
//   const [roomNumber, setRoomNumber] = useState(1);
//   const [guest, setGuest] = useState(1);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('roomType', roomType)
//     console.log('room number', roomNumber)
//     console.log('guest', guest)
//   }
//   return (
//     <Form>
//       <Row>
//         <Col xs={4}>
//             <Form.Group controlId="formRoomType">
//               <Form.Label>Room Type</Form.Label>
//               <Form.Control as="select" 
//                 value={roomType}  onChange={e => setRoomType(e.target.value)}>
//                 <option value='Room type 1'>Room type 1</option>
//                 <option value='Room type 2'>Room type 2</option>
//                 <option value='Room type 3'>Room type 3</option>
//                 <option value='Room type 4'>Room type 4</option>
//                 <option value='Room type 5'>Room type 5</option>
//               </Form.Control>
//             </Form.Group>
//         </Col>
//         <Col xs={4}>
//           <Form.Group controlId="formBasicRoom">
//             <Form.Label>Rooms</Form.Label>
//             <Form.Control type="number" placeholder="Select no of room"
//             value={roomNumber} 
//             onChange={e => setRoomNumber(e.target.value > 0 ?  e.target.value: 1)}/>
//           </Form.Group>
//         </Col>
//         <Col xs={4}>
//           <Form.Group controlId="formBasicGuest">
//             <Form.Label>Guests</Form.Label>
//             <Form.Control type="number" placeholder="Select no of guest"
//             value={guest} 
//             onChange={e => setGuest(e.target.value > 0 ? e.target.value: 1)} />
//           </Form.Group>
//         </Col>
//       </Row>
//   <Button className='mt-5' variant="primary" type="submit" onClick={handleSubmit}>
//     Submit
//   </Button>
//   <Col className='pt-3 d-flex justify-content-between'>
//    <Button variant="warning">Add More</Button>
//    <Button variant="danger">Remove</Button>
// </Col>
// </Form>
    
//   )
// }
// export default Person;



import { useState } from "react"
function Person(){
    const [inputFields, setInputFields] = useState([{
        fullName:'',
        emailAddress:'',
        salary:''  
    } ]);
 
    const addInputField = ()=>{
        setInputFields([...inputFields, {
            fullName:'',
            emailAddress:'',
            salary:''  
        } ])
      
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    
 
 
}
    return(
    
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                  {
                      inputFields.map((data, index)=>{
                          const {fullName, emailAddress, salary}= data;
                          return(
                            <div className="row my-3" key={index}>
                    <div className="col">
                    <div className="form-group">
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={fullName} name="fullName" className="form-control"  placeholder="Full Name" />
                    </div>
                    </div>
                    <div className="col">
                    <input type="email" onChange={(evnt)=>handleChange(index, evnt)} value={emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="col">
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={salary} name="salary" className="form-control" placeholder="Salary" />
                    </div>
                    <div className="col">
                
                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>Remove</button>:''}
                  
                 
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">
                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        
    )
}
export default Person