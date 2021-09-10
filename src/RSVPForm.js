import React, { useState } from "react";

function RSVPForm() {
  const initialFormState = {};
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...initialFormState });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
    </form>
  );
}

export default RSVPForm;
