import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    work: "",
  });

  const signupHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post("http://localhost:5000/api/v1/signup", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={signupHandler}>
        <input type="text" onChange={(e) => { setUserData({ name: e.target.value }); }} placeholder="name" value={userData?.name}/>
        <input type="text" onChange={(e) => { setUserData({ ...userData, email: e.target.value }); }} placeholder="email" value={userData?.email} />
        <input type="password" onChange={(e) => { setUserData({ ...userData, password: e.target.value }); }} placeholder="password"  value={userData?.password}   />
        <input type="text" onChange={(e) => { setUserData({ ...userData, work: e.target.value }); }} placeholder="work" value={userData?.work} />
        <button>SIGNUP</button>
      </form>
    </div>
  );
};

export default Signup;