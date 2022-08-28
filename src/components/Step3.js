import React from "react";
import {FaUser, FaUsers} from "react-icons/fa"
import "./Step3.css"

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <h2 className="bold heading">How are you planning to use Eden?</h2>
      <p className="text-muted mb-5 paragraph">We"ll streamline your setup experience accordingly </p>
      
      <div className="row">
        <div className="col-sm-6">
          <a href="#">
          <div className="card">
            <div className="card-body" style={{textAlign: 'left'}}>
            <FaUser className="mb-2 logo"/>
              <h5 className="card-title">For myself</h5>
              <p className="card-text">write better. Think more clearly. stay organized</p>
            </div>
          </div>
          </a>
         
        </div>
        <div className="col-sm-6">
          <a href="#">
          <div className="card">
            <div className="card-body" style={{textAlign: 'left'}}>
              <FaUsers className="mb-2 logo"/>
              <h5 className="card-title">With my team</h5>
              <p className="card-text">Write docs, tasks & project, all in one place.</p>
            </div>
          </div>
          </a>
         
        </div>
      </div>
    </>
  );
};

export default Step3;
