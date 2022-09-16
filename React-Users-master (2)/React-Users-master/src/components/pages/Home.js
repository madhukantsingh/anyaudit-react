import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8000/company");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://127.0.0.1:8000/company${id}`);
    loadUsers();
  };

  return (
    <div className="container">
       
      <div className="py-4">
        <h1>Company Form</h1>
        <Link className="btn btn-primary" to="/users/add">Add</Link>
        {/* <Link className="btn btn-center-outline-bule" to >Logout</Link> */}
         &nbsp;
        <table class="table border shadow"> &nbsp;
        
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Pan</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Cin No</th>


              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.pan}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.cinno}</td>

                <td>
                 <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link> 
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
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

export default Home;


// import React,{Component} from 'react';
// import {Table} from 'react-bootstrap';
// import {AddUser} from '../users/AddUser';
// import {EditBusiness} from './EditBusiness';
// import { Link } from 'react-router-dom';


// import {Button,ButtonToolbar} from 'react-bootstrap';


// export class Home extends Component{




//     constructor(props){
//         super(props);
//         this.state={emps:[], addModalShow:false, editModalShow:false}
//     }

//     refreshList(){
//         fetch('http://127.0.0.1:8000/company')
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
//             fetch(`http://127.0.0.1:8000/company/${id}`,{
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
//         return(
//             <div >
//                   <ButtonToolbar>
//                     <Button variant='primary'
//                     onClick={()=>this.setState({addModalShow:true})}>
//                     Add Company</Button>

//                     <AddUser show={this.state.addModalShow}
//                     onHide={addModalClose}/>
//                 </ButtonToolbar>
//                 <Table className="mt-4" striped bordered hover size="sm">
               
//                     <thead>
//                         <tr>
//                         <th>S.no</th>
//                         <th>name</th>
//                         <th>email</th>
//                         <th>Phone</th>
//                         <th>pan</th>
//                         <th>cinno</th>
//                         <th>Action</th>

			             
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {emps.map((emp,index)=>
//                             <tr key={emp.id}>
//                                  <th scope="row">{index + 1}</th>
                               
//                                 <td>{emp.name}</td>
//                                 <td>{emp.email}</td>
//                                 <td>{emp.phone}</td>
//                                 <td>{emp.pan}</td>
//                                 <td>{emp.cino}</td>
//                                 <td>
// <ButtonToolbar>
//     <Button className="mr-2" variant="info"
//     onClick={()=>this.setState({editModalShow:true,
//         id:emp.id,name:emp.name,email:emp.email,
//         phone:emp.phone,pan:emp.pan,cinno:emp.cinno})}>
//             Edit
//         </Button>

//         <Button className="mr-2" variant="danger"
//     onClick={()=>this.deleteEmp(emp.id)}>
//             Delete
//         </Button>

//         {/* <EditBusiness show={this.state.editModalShow}
//         onHide={editModalClose}
//         id={id}
//         name={name}
//         location={location}
//         products={products}
//         ieal={ieal}
//         /> */}
// </ButtonToolbar>

//                                 </td>

//                             </tr>)}
//                     </tbody>

//                 </Table>

              
//             </div>
//         )
//     }
// }
