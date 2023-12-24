// Login.js

import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const email = loginNameRef.current.value;
    const password = loginPasswordRef.current.value;

    // Simulating authentication without a backend
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user with provided email and password exists
    const registeredUser = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (registeredUser) {
      // Store user data in local storage
      localStorage.setItem("currentUser", JSON.stringify(registeredUser));

      // Store a simple token in local storage to represent the authenticated state
      localStorage.setItem("authToken", "yourAuthToken");

      // Redirect to the dashboard after successful login
      navigate("/profile");
    } else {
      // Handle failed login
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
                {loginError && (
                  <div className="error-box">
                    <p className="error-message">{loginError}</p>
                  </div>
                )}
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
