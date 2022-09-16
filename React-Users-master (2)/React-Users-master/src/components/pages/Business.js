// import React,{Component} from 'react';
// import {Table} from 'react-bootstrap';
// import {AddBusiness} from './AddBusiness';
// import {EditBusiness} from './EditBusiness';
// import {ViewBusiness} from './ViewBusiness';
// import { Link } from 'react-router-dom';


// import {Button,ButtonToolbar} from 'react-bootstrap';


// export class Business extends Component{




//     constructor(props){
//         super(props);
//         this.state={emps:[], editModalShow:false,viewModalShow:false}
//     }

//     refreshList(){
//         fetch('http://127.0.0.1:8000/business')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({emps:data});
//         });
//     }

//     componentDidMount(){
//         this.refreshList();
//     }

//     componentDidUpdate(){
//         this.refreshList();
//     }

//     deleteEmp(id){
//         if(window.confirm('Are you sure?')){
//             fetch(`http://127.0.0.1:8000/business/${id}`,{
//                 method:'DELETE',
//                 header:{'Accept':'application/json',
//             'Content-Type':'application/json'}
//             })
//         }
//     }
//     render(){
//         const {emps , id, name,description,location,products,type,IEAL,heads}=this.state;
//         let addModalClose=()=>this.setState({addModalShow:false});
//         let editModalClose=()=>this.setState({editModalShow:false});
//         let viewModalClose=()=>this.setState({viewModalShow:false});
//         return(
//             <div >
               
//                   <ButtonToolbar>
//                     <Button variant='primary'
//                     onClick={()=>this.setState({addModalShow:true})}>
//                     Add Business</Button>

//                     <AddBusiness show={this.state.addModalShow}
//                     onHide={addModalClose}/>
//                 </ButtonToolbar>

                
//                 <Table className="mt-4" striped bordered hover size="sm">
               
//                     <thead>
//                         <tr>
//                         <th>S.no</th>
//                         <th>name</th>
//                         <th>location</th>
//                         <th>products</th>
//                         <th>Types</th>
//                         <th>Heads</th>
// 			             <th>IEAL</th>
//                          <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {emps.map((emp,index)=>
//                             <tr key={emp.id}>
//                                  <th scope="row">{index + 1}</th>
                               
//                                 <td>{emp.name}</td>
//                                 <td>{emp.location}</td>
//                                 <td>{emp.products}</td>
//                                 <td>{emp.type}</td>
//                                 <td>{emp.IEAL}</td>
//                                 <td>{emp.heads}</td>
//                                 <td>
// <ButtonToolbar>

//     <Button className="mr-2" variant="info"
//     onClick={()=>this.setState({editModalShow:true,
//         id:emp.id,name:emp.name,location:emp.location,description:emp.description,
//         products:emp.products,IEAL:emp.IEAL,heads:emp.heads})}>
//             Edit
//         </Button>

//         <Button className="mr-2" variant="danger"
//     onClick={()=>this.deleteEmp(emp.id)}>
//             Delete
//         </Button>
//         <Button className="mr-2" variant="primary"
//         onClick={()=>this.setState({viewModalShow:true,
//         id:emp.id,name:emp.name,location:emp.location,description:emp.description,type:emp.type,
//         products:emp.products,IEAL:emp.IEAL,heads:emp.heads})}>
//             View
//         </Button>

//          <EditBusiness show={this.state.editModalShow}
//         onHide={editModalClose}
//         id={id}
//         name={name}
//         location={location}
//         products={products}
//         IEAL={IEAL}
//         description={description}
//         type={type}
//         heads={heads}


//         /> 
//         <ViewBusiness show={this.state.viewModalShow}
//         onHide={viewModalClose}
//         id={id}
//         name={name}
//         location={location}
//         products={products}
//         IEAL={IEAL}
//         description={description}
//         type={type}
//         heads={heads}


//         /> 
// </ButtonToolbar>

//                                 </td>

//                             </tr>)}
//                     </tbody>

//                 </Table>

              
//             </div>
//         )
//     }
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Business = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/business");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://127.0.0.1:8000/business/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
       
      <div className="py-4">
        <h1>Business</h1>
        <Link className="btn btn-success" to="/users1/add">Add</Link>
       
         
        <table class="table border shadow">
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">S No</th>
            
            <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">description</th>
              <th scope="col">location</th>
              <th scope="col">products</th>
              <th scope="col">IEAL</th>
              <th scope="col">heads</th>
              <th scope="col">type</th>
             

             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                
                <td>{user.name}</td>
                <td>{user.description}</td>
                <td>{user.location}</td>
                <td>{user.products}</td>
                <td>{user.IEAL}</td>
                <td>{user.heads}</td>
                <td>{user.type}</td>
                

                <td>
                  <Link class="btn btn-dark mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-warning mr-2"
                    to={`/users1/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                 
                </td>
              </tr>
            ))}
         
          </tbody>
         
        </table>
       
      </div>
      
    </div>
     
  );
};

export default Business;
