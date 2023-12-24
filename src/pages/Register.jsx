// Register.js

import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const navigate = useNavigate();
  const [registrationError, setRegistrationError] = useState(null);

  const handleRegistration = (e) => {
    e.preventDefault();

    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;

    // Retrieve existing users from localStorage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    const isEmailRegistered = existingUsers.some(
      (user) => user.email === email
    );
    if (isEmailRegistered) {
      setRegistrationError(
        "Email is already registered. Please use a different email."
      );
      return;
    }

    // Add new user to the existing array
    const newUser = { name, email, password };
    existingUsers.push(newUser);

    // Save the updated user array back to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Store user data in local storage
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    // Redirect to the profile page after successful registration
    navigate("/profile");
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={handleRegistration}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
                {registrationError && (
                  <div className="error-box">
                    <p className="error-message">{registrationError}</p>
                  </div>
                )}
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
