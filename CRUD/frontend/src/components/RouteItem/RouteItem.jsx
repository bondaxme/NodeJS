import classes from './RouteItem.module.css';

const RouteItem = ({ route, onDelete, onEdit }) => {
  return (
    <div className={classes.routeItem}>
      <div className={classes.routeItemHeader}>
        <p>{route.number}</p>
      </div>
      <div className={classes.routeItemDetails}>
        <p>{route.transport_type}</p>
        <p>{route.initial_stop}</p>
        <p>{route.final_stop}</p>
        <p>{route.travel_time} minutes</p>
      </div>
      <div className={classes.routeItemActions}>
        <button onClick={() => onEdit(route)}>Edit</button>
        <button onClick={() => onDelete(route._id)}>Delete</button>
      </div>
    </div>
  );
};

export default RouteItem;
