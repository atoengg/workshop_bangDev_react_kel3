import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default Routers;
