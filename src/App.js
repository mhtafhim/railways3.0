import "./App.css";
import { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Booking } from "./Components/Pages/Booking";
import { Railway } from "./Components/Pages/Railway";
import { LiveLocation } from "./Components/Pages/LiveLocation";
import { TrainSchedule } from "./Components/Pages/TrainSchedule";
import { AdminLogin } from "./Components/Admin/AdminLogin";
import { LoginSignup } from "./Components/Pages/LoginSignup";
import { DashBoard } from "./Components/Admin/DashBoard";

import { BookingTable } from "./Components/Pages/BookingTable";
import { UpdateTrain } from "./Components/Admin/UpdateTrain";
import SideBar from "./Components/Admin/SideBar";
import { CustomerInfo } from "./Components/Admin/CustomerInfo";
import { ReportAdmin } from "./Components/Admin/ReportAdmin";
import { Verification } from "./Components/Pages/Verification";
import { USER_TYPES } from "./Components/Pages/UserType";
function App() {
  const [currentUserType, setCurrentUserType] = useState(USER_TYPES.PUBLIC);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  useEffect(() => {});
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div>
      {(currentUserType === USER_TYPES.NORMAL_USERS ||
        currentUserType === USER_TYPES.PUBLIC) && <Navbar />}

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
          <Route
            path="/AdminLogin"
            element={
              <AdminLoginFun>
                <AdminLogin />
              </AdminLoginFun>
            }
          />
          <Route path="/Verification" element={<Verification />} />
          <Route
            path="/login"
            element={<LoginSignup setUserType={setCurrentUserType} />}
          />
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
      currentUserType === USER_TYPES.ADMIN_USER ||
      currentUserType === USER_TYPES.NORMAL_USERS
    ) {
      {
        return <> {children}</>;
      }
    }
  }
  function AdminElement({ children }) {
    if (currentUserType === USER_TYPES.ADMIN_USER) {
      {
        return <> {children}</>;
      }
    }
  }
  function AdminLoginFun({ children }) {
    if (currentUserType === USER_TYPES.ADMIN_LOGIN) {
      {
        return <> {children}</>;
      }
    }
  }
}

export default App;
