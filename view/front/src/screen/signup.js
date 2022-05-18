import axios from "axios";
import React, { useState } from "react";
import Loader from "../components/Loader/loader";
import styles from './signup.module.css'
const Signup = () => {

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [work, setWork] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userData = {
        name, phone, email, password, work, confirmPassword
    }


    const createAccount = (e) => {
        setLoading(true)
        e.preventDefault();
        axios.post("http://localhost:5000/api/v1/signup", userData)
            .then((res) => {
                setLoading(false)
                console.log(res)
            })
            .catch((err) => { console.log(err) });

    }

    return (
        <React.Fragment>
          <div className="container">
              <div className="row">
                  <div className="col-8 m-auto">
                    <h1 className="text-center my-2">SIGN UP</h1>
                    <form>
                        <input className="form-control my-2" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter name" />
                        <input className="form-control my-2" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                        <input className="form-control my-2" type="text" value={work} onChange={(e) => { setWork(e.target.value) }} placeholder="Enter work" />
                        <input className="form-control my-2" type="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="phone" />
                        <input className="form-control my-2" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password" />
                        <input className="form-control my-2" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder="confirmPassword" />
                            {loading ? <Loader /> : <button className={`btn btn-primary ${styles.btn_main}`}   onClick={createAccount}>Register Now</button>}
                    </form>
                  </div>
              </div>
          </div>
        </React.Fragment>
    );
};

export default Signup;