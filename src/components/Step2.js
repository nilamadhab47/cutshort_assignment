import React from "react";
import { FormGroup, Label, Input, InputGroup } from "reactstrap";


const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <h2 className="bold heading">Let's set up for all your Work</h2>
      <p className="text-muted mb-5 paragraph">You can always create another workspace later </p>
      <FormGroup>
        <Label for="text" className="form-label" style={{ float: 'left', marginBottom: "0.8rem" }}>Workspace Name</Label>
        <Input
          style={{ marginBottom: "1rem" }}
          type="text"
          name="email"
          id="email"
          placeholder="Steve Jobs"
          value={props.workspace} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        <Label for="text" style={{ float: 'left', marginBottom: "0.8rem" }}>Workspace URL <span className="text-muted">optional</span></Label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">www.eden.com/</span>
          <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Example"/>
        </div>
        {/* <Input
          style={{marginBottom: "1rem"}}
          type="text"
          name="text"
          id="text"
          placeholder="Steve"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        /> */}
      </FormGroup>
    </>
  );
};

export default Step2;
