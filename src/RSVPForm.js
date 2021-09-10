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
}

export default RSVPForm;
