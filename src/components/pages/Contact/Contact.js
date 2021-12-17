import React, { useState } from "react";
import "./Contact.css";

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "FullName") {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${fullName}`);
    setFullName("");
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form className="form">
        <div className="stack">
          <input
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message to me!"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
