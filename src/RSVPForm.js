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
  return <form onSubmit={handleSubmit}></form>;
}

export default RSVPForm;
