import { Form } from "@remix-run/react";
import { useState } from "react";

export default function ComplexState() {
  const [contact, setContact] = useState({ fName: "", lName: "", email: "" });

  function handleChange(event: any) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <Form className="">
        <div className="form-group">
          <input
            className="form-control mb-1"
            name="fName"
            placeholder="First Name"
            value={contact.fName}
            onChange={handleChange}
          />
          <input
            className="form-control mb-1"
            name="lName"
            placeholder="Last Name"
            value={contact.lName}
            onChange={handleChange}
          />
          <input
            className="form-control mb-1"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </Form>
    </div>
  );
}
