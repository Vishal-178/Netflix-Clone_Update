import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTERS from "../constants/routes";

export default function SignIn() {
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isInValid = password === "" || emailAddress === "";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", firebase);
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        navigate(ROUTERS.HOME);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        console.log("error", error.message);
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method="post">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit type="submit" disabled={isInValid}>
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
