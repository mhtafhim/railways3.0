import "./App.css";
import { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Booking } from "./Components/Pages/Booking";
import { Railway } from "./Components/Pages/Railway";
import { LiveLocation } from "./Components/Pages/LiveLocation";
import { TrainSchedule } from "./Components/Pages/TrainSchedule";

import { LoginSignup } from "./Components/Pages/LoginSignup";
import { DashBoard } from "./Components/Admin/DashBoard";
import ShowNavbar from "./Components/ShowNavbar/ShowNavbar";
import { UpdateTrain } from "./Components/Admin/UpdateTrain";
import SideBar from "./Components/Admin/SideBar";
import { CustomerInfo } from "./Components/Admin/CustomerInfo";
import { ReportAdmin } from "./Components/Admin/ReportAdmin";
const USER_TYPES = {
  PUBLIC: "Public User",
  NORMAL_USERS: "Normal Users",
  ADMIN_USER: "Admin User ",
};
const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER;
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  useEffect(() => {});
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div>
      {(CURRENT_USER_TYPE === USER_TYPES.NORMAL_USERS ||
        CURRENT_USER_TYPE === USER_TYPES.PUBLIC) && <Navbar />}

      <div className="mainContainer">
        <div className="containerChild">
          <AdminElement>
            {" "}
            <SideBar
              openSidebarToggle={openSidebarToggle}
              OpenSidebar={OpenSidebar}
            />{" "}
          </AdminElement>
        </div>
        <AppRoutes />
      </div>
    </div>
  );
}
function AppRoutes() {
  return (
    <div className="containerChild">
      <Routes>
        <Route
          path="/"
          element={
            <PublicElement>
              <Railway />
            </PublicElement>
          }
        />
        <Route path="/railway" element={<Railway />} />
        <Route path="/Train Schedule" element={<TrainSchedule />} />
        <Route
          path="/LiveLocation"
          element={
            <UserElement>
              <LiveLocation />
            </UserElement>
          }
        />
        <Route
          path="/Booking"
          element={
            <UserElement>
              <Booking />
            </UserElement>
          }
        />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/UpdateTrain" element={<UpdateTrain />} />
        <Route path="/CustomerInfo" element={<CustomerInfo />} />
        <Route path="/ReportAdmin" element={<ReportAdmin />} />
      </Routes>
    </div>
  );
}

function PublicElement({ children }) {
  return <> {children}</>;
}
function UserElement({ children }) {
  if (
    CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER ||
    CURRENT_USER_TYPE === USER_TYPES.NORMAL_USERS
  ) {
    {
      return <> {children}</>;
    }
  }
}
function AdminElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
    {
      return <> {children}</>;
    }
  }
}
export default App;
