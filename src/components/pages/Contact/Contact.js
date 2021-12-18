import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validateEmail } from "./helpers";
import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [Message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!FullName) {
      setErrorMessage("Name is required");

      return;
    }
    if (!Message) {
      setErrorMessage("Message is required");

      return;
    }
    alert(`${FullName}, thanks for send me a message!`);

    setFullName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <div className="formCont">
        <div className="formStyle">
          <Form>
            <Form.Group className="formSpace">
              <Form.Label style={{ color: "white" }}>Name:</Form.Label>
              <Form.Control
                value={FullName}
                name="FullName"
                onChange={handleInputChange}
                type="text"
                placeholder="Full Name"
              />
            </Form.Group>
            <Form.Group className="formSpace">
              <Form.Label style={{ color: "white" }}>Email Address:</Form.Label>
              <Form.Control
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email Address"
              />
            </Form.Group>
            <Form.Group className="formSpace">
              <Form.Label style={{ color: "white" }}>Message:</Form.Label>
              <Form.Control
                value={Message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Send me a message!"
                as="textarea"
                size="lg"
                rows={3}
              />
            </Form.Group>
          </Form>
          <Button
            type="button"
            onClick={handleFormSubmit}
            variant="outline-light"
          >
            Submit
          </Button>
          {errorMessage && (
            <div>
              <p className="errorText">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
