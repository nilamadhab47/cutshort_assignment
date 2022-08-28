import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardBody,
  CardText,
  CardFooter
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";


import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      // fullname: "",
      // workspace: "",
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next 
    this._next = this._next.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  // Trigger an alert on form submission
  handleSubmit = event => {
    event.preventDefault();
    console.log("submit")
    
  };

  // Test current step with ternary
  // _next functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

 

 


  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <Button color="primary float-center" onClick={this._next} style={{backgroundColor: "#664de6", color: "#fff", width: "68%"}} className="btn">
          Create Workspace
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep == 3 ) {
      return <Button color="primary float-center"  className="button" style={{backgroundColor: "#664de6", color: "#fff", width: "68%"}} onClick={this._next} >Submit</Button>;
    }
    if (currentStep == 4 ) {
      return <Button color="primary float-center"  className="button" style={{backgroundColor: "#664de6", color: "#fff", width: "68%"}} onClick={this.handleSubmit} >Launch Eden</Button>;
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <>
            <MultiStepProgressBar currentStep={this.state.currentStep} />
        <Form className="mt-5" style={{border: "none"}}>
          <Card
          style={{display: "inline-block",
            border: "none",
            width: "45%"}}
          >
            
            <CardBody>
              
              <CardText />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                fullname={this.state.fullname}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                workspace={this.state.workspace}
              />
              <Step3
                currentStep={this.state.currentStep}
              />
              <Step4
                currentStep={this.state.currentStep}
              />
            </CardBody>
            <CardFooter
            style={{backgroundColor: "#fff", border: "none"}}>
              {this.nextButton}
              {this.submitButton}
            </CardFooter>
          </Card>
        </Form>
      </>
    );
  }
}

export default MasterForm;
