import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      <h2 className="bold heading">Welcome! First things first....</h2>
      <p className="text-muted mb-5 paragraph">You can always change them later</p>
      <FormGroup>
        <Label for="text" className="form-label" style={{float: 'left', marginBottom: "0.8rem"}}>Full Name</Label>
        <Input
        style={{marginBottom: "1rem"}}
          type="text"
          name="email"
          id="email"
          placeholder="Steve Jobs"
          value={props.fullname} // Prop: The name input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        <Label for="text" style={{float: 'left', marginBottom: "0.8rem"}}>Display name</Label>
        <Input
          style={{marginBottom: "1rem"}}
          type="text"
          name="text"
          id="text"
          placeholder="Steve"
        />
      </FormGroup>
    </>
  );
};

export default Step1;
