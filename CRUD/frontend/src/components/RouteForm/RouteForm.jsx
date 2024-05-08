import { useState } from 'react';
import classes from './RouteForm.module.css';

const RouteForm = ({ route, onCancelEdit, onUpdateRoute }) => {
  const [formData, setFormData] = useState({
    transport_type: route.transport_type,
    number: route.number,
    initial_stop: route.initial_stop,
    final_stop: route.final_stop,
    travel_time: route.travel_time,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateRoute({ ...formData, _id: route._id });
  };

  return (
    <div className={classes.routeForm}>
      <h2>Edit Route</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Transport Type:
          <input type="text" name="transport_type" value={formData.transport_type} onChange={handleChange} />
        </label>
        <label>
          Number:
          <input type="text" name="number" value={formData.number} onChange={handleChange} />
        </label>
        <label>
          Initial Stop:
          <input type="text" name="initial_stop" value={formData.initial_stop} onChange={handleChange} />
        </label>
        <label>
          Final Stop:
          <input type="text" name="final_stop" value={formData.final_stop} onChange={handleChange} />
        </label>
        <label>
          Travel Time:
          <input type="number" name="travel_time" value={formData.travel_time} onChange={handleChange} />
        </label>
        <div className={classes.buttons}>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancelEdit}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RouteForm;
