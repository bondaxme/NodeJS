
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import CreateRoute from "./pages/CreateRoute/CreateRoute";


function MyComponent() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateRoute />} />
      </Routes>
    </>
  );
}

export default MyComponent;
