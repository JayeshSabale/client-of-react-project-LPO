import React, {useState, useEffect} from "react";
import "./bootstrap-5.2.2-dist/css/bootstrap.min.css"
import axios from "axios";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const  [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://server-of-reactproject-lpo.onrender.com/getUsers")
    .then(users => setUsers(users.data))
    .catch(error => console.log(error))
  })
  
  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("https://server-of-reactproject-lpo.onrender.com/register", {name,email,password})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center aligh-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
      <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input 
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0" 
              onChange={(e)=> setName(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input 
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0" 
              onChange={(e)=> setEmail(e.target.value)}
            />
            </div>

             <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input 
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0" 
              onChange={(e)=> setPassword(e.target.value)}
            />

            </div>

            <button type="submit" className="btn btn-success w-100 rounded-0">
                Register
            </button>
          </form>
      </div>

      <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
        <table className="table">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
      </div>
      
    </div>
  );
}

export default App;
