
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import  MasterForm from "./components/MasterForm"
import { Container, Row, Col } from "reactstrap";
import logo from "./image/logo.svg"

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: white; }"}</style>
        
      </Helmet>
      <Container>
          
        <Row>
          <Col>
          <p className="h2 mb-2 p-3" style={{fontWeight: "600"}}>Eden <img src={logo} alt="logo" /> </p>
            <MasterForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
