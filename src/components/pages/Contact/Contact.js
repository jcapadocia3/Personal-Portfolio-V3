import React, { useState } from "react";
import "./Contact.css";

function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "FullName") {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${fullName}`);
    setFullName("");
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form className="formCont">
          <input className="form1"
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            type="text"
            placeholder="Full Name"
          />
          <input className="form1"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <textarea className="form1"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message to me!"
          />
          <button className="form1" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
      </form>
    </div>
  );
}

export default Form;
