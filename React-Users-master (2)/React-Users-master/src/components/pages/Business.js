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
            
            
              <th scope="col">Name</th>
              <th scope="col">description</th>
              <th scope="col">location</th>
              <th scope="col">products</th>
              <th scope="col">IEAL</th>
              


             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                
                <td>{user.name}</td>
                <td>{user.description}</td>
                <td>{user.location}</td>
                <td>{user.products}-{user.type}</td>
                <td>{user.IEAL}-{user.heads}</td>
                

                <td>
                  <Link class="btn btn-dark mr-2" to={`/users1/${user.id}`}>
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
