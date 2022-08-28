import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const Step4 = props => {
    if (props.currentStep !== 4) {
        return null;
      }
  return (
    <div>
      <FaCheckCircle style={{
            fontSize: "13rem",
            marginBottom: "2rem",
            color: "#664de6"
      }}/>
        <h2 className="bold heading">Congratulations</h2>
      <p className="text-muted mb-5 paragraph">You have completed onboarding, you can start using the eden! </p>
    </div>
  )
}

export default Step4