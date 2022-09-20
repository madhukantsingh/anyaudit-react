import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Family = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/family");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://127.0.0.1:8000/family/${id}`)
    .then(res=>res.json())
    .then((result)=>{
        alert(result);

    },
    (error)=>{
        alert('Deleted Sucessfully');
    });
    loadUsers();
  };

  return (
    <div className="container">
       
      <div className="py-4">
        <h1>Family Name</h1>
        <Link className="btn btn-outline-bule" to="/users5/add">Add</Link>
        <Link className="btn btn-right-outline-bule" to >Logout</Link>
         
        <table class="table border shadow">
        
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Default</th>
              <th scope="col">U Of Measurement</th>
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                {/* <td>{user.id}</td> */}
                <td>{user.name}</td>
                <td>{user.defaults}</td>
                <td>{user.u_of_measurement}</td>
                
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users5/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users5/edit/${user.id}`}  
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

export default Family;
