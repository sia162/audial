import React from "react";
import { accessUrl } from "../spotify";
import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a
        className="btn btn-success btn-lg"
        style={{ border: "none" }}
        href={accessUrl}
      >
        Login With Spotify
      </a>
    </Container>
  );
};

export default Login;
