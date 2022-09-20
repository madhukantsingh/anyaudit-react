import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Types = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://127.0.0.1:8000/type");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://127.0.0.1:8000/type/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
       
      <div className="py-4">
        <h1>Types Of The Products</h1>
        <Link className="btn btn-outline-bule" to="/users3/add">Add</Link>
         
        <table class="table border shadow">
        
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME Of The Type</th>
              

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
               
                <td>{user.type}</td>
                
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users3/${user.tid}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users3/edit/${user.tid}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.tid)}
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

export default Types;
