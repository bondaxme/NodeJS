import { useState, useEffect } from "react";
import axios from "axios";
import RouteItem from "../../components/RouteItem/RouteItem";
import classes from "./Home.module.css";
import RouteForm from "../../components/RouteForm/RouteForm";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";

const HomePage = () => {
  const [routes, setRoutes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editRoute, setEditRoute] = useState(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/routes");
        setRoutes(response.data.data);
        console.log(routes);
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

    fetchRoutes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/routes/${id}`);
      setRoutes(routes.filter((route) => route._id !== id));
    } catch (error) {
      console.error("Error deleting route:", error);
    }
  };

  const handleEdit = (route) => {
    setIsEditing(true);
    setEditRoute(route);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditRoute(null);
  };

  const handleUpdateRoute = async (updatedRoute) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/routes/${updatedRoute._id}`,
        updatedRoute
      );
      setRoutes(
        routes.map((route) =>
          route._id === updatedRoute._id ? response.data.data : route
        )
      );
      setIsEditing(false);
      setEditRoute(null);
    } catch (error) {
      console.error("Error updating route:", error);
    }
  };


  return (
    <div className={classes.text}>
      <h1 className={classes.mainHeading}>Public transportation routes</h1>
      <div className={classes.tableHead}>
        <div className={classes.tableHeadNum}>
          <p>№</p>
        </div>
        <div className={classes.tableHeadDetails}>
          <p>Transport</p>
          <p>Initial stop</p>
          <p>Final stop</p>
          <p>Travel time</p>
        </div>
        <div className={classes.tableHeadActions}>
          <p>Actions</p>
        </div>
      </div>
      <ul>
        {routes.map((route) => (
          <RouteItem key={route._id} route={route} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </ul>
      {isEditing && (
        <ModalWrapper closeFunc={handleCancelEdit}>
          <RouteForm route={editRoute} onCancelEdit={handleCancelEdit} onUpdateRoute={handleUpdateRoute} />
        </ModalWrapper>
      )}
    </div>
  );
};

export default HomePage;
