import React, { useState } from "react";
import axios from "axios";
import classes from "./CreateRoute.module.css";

const CreateRoute = () => {
  const [formData, setFormData] = useState({
    transport_type: "",
    number: "",
    initial_stop: "",
    final_stop: "",
    travel_time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/routes", formData);
      console.log(response.data);
      history.push('/')
    } catch (error) {
      console.error("Error creating route:", error);
    }
  };

  return (
    <div className={classes.createRouteContainer}>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label className={classes.label}>Transport Type:</label>
          <input
            type="text"
            name="transport_type"
            value={formData.transport_type}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Initial Stop:</label>
          <input
            type="text"
            name="initial_stop"
            value={formData.initial_stop}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Final Stop:</label>
          <input
            type="text"
            name="final_stop"
            value={formData.final_stop}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Travel Time:</label>
          <input
            type="number"
            name="travel_time"
            value={formData.travel_time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Route</button>
      </form>
    </div>
  );
};

export default CreateRoute;
