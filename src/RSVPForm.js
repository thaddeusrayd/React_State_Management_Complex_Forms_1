import React, { useState } from "react";

function RSVPForm() {
  const initialFormState = {
    name: "",
    age: "",
    new: false,
    comment: "",
  };
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
    console.log(formData.name, formData.age, formData.new, formData.comment);
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
      <br />
      <label htmlFor="age">
        Age
        <select
          id="age"
          name="age"
          onChange={handleChange}
          value={formData.age}
        >
          <option value="">Prefer not to say</option>
          <option value="low">0-19</option>
          <option value="middle">20-39</option>
          <option value="high">40-59</option>
          <option value="senior">60+</option>
        </select>
      </label>
      <br />
      <label htmlFor="new">
        New Member
        <input
          id="new"
          type="checkbox"
          name="new"
          onChange={handleChange}
          checked={formData.new}
          value="new"
        />
      </label>
      <br />
      <label htmlFor="comment">
        Comment
        <input
          id="comment"
          type="text"
          name="comment"
          onChange={handleChange}
          value={formData.comment}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RSVPForm;
