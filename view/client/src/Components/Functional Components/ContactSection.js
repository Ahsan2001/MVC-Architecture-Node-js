import React, { useState } from 'react';
function ContactSection() {


    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
            errorMessage();
        } else {
            setSubmitted(true);
            setError(false);
            successMessage()

        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            alert(`User  ${name} successfully registered!!`)
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
               alert("Please enter all the fields")
        );
    };




    return (
        <React.Fragment>
            <section className="contact">
                <div className="contact-background-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 contact-content">
                                <h4>CONTACT</h4>
                                <h1>GET IN TOUCH WITH US</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>

                            <div className="col-md-5 contact-form">

                                
                                <form>
                              
                                    <input onChange={handleName} className="form-control" placeholder="Full Name"
                                        value={name} type="text" />

                               
                                    <input onChange={handleEmail} className="form-control" placeholder="Email Address"
                                        value={email} type="email" />

                   
                                    <input onChange={handlePassword} className="form-control" placeholder="Password"
                                        value={password} type="password" />



                                    <div className="send-btn text-center">
                                        <button onClick={handleSubmit} className="btn" type="submit">
                                            Submit
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}



export default ContactSection;