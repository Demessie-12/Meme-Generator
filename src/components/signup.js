import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmation: "",
    isjoined: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitForm(e) {
    e.preventDefault();
    if (formData.password === formData.confirmation) {
      console.log("Successfully signed up", formData);
    } else {
      console.log("passwords to not match");
      return;
    }
    formData.isjoined &&
      console.log("Thanks for signing up for our newwsletter");
  }

  return (
    <form className="signup-form" onSubmit={submitForm}>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        value={formData.email}
      />
      <br />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Passwoed"
        value={formData.password}
      />
      <br />
      <input
        type="password"
        name="confirmation"
        onChange={handleChange}
        placeholder="Confirm password"
        value={formData.confirmation}
      />
      <br />
      <input
        type="checkbox"
        name="isjoined"
        onChange={handleChange}
        checked={formData.isjoined}
        id="isjoined"
      />
      <label htmlFor="isjoined">I want to join the newsletter.</label>
      <br />
      <button>Sign Up</button>
    </form>
  );
}
