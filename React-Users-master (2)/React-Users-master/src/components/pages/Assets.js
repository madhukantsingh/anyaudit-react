import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Assets = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://127.0.0.1:8000//${id}`);
    loadUsers();
  };

  return (
    <div className="container">
       
      <div className="py-4">
        <h1> Assets page</h1>
        <Link className="btn btn-outline-bule" to="/users7/add">Add</Link>
         
        <table class="table border shadow">
        
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Type</th>
              <th scope="col">Area</th>
              <th scope="col">FMV</th>
              <th scope="col">SDV</th>
              <th scope="col">Attactment</th>
              

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.location}</td>
                <td>{user.type}</td>
                <td>{user.area}</td>
                <td>{user.fmv}</td>
                <td>{user.sdv}</td>
                <td>{user.attactment}</td>
                
                <td>
                  {/* <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link> */}
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

export default Assets;



