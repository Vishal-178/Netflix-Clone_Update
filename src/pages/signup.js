import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTERS from "../constants/routes";
export default function SignUp() {
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const isInValid = firstName === "" || password === "" || emailAddress === "";
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTERS.BROWSER);
          })
      )
      .catch((error) => {
        setFirstName("");
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
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method="post">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
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
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already have an account?{" "}
              <Form.Link to={ROUTERS.SIGNIN}>Sign In</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              By signing up, you agree to the Netflix Terms of Service and
              Privacy Policy.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
