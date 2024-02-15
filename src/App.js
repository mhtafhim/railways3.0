import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Booking } from "./Components/Pages/Booking";
import { Railway } from "./Components/Pages/Railway";
import { LiveLocation } from "./Components/Pages/LiveLocation";
import { TrainSchedule } from "./Components/Pages/TrainSchedule";
import { AdminLogin } from "./Components/Admin/AdminLogin";
import { LoginSignup } from "./Components/Pages/LoginSignup";
import { DashBoard } from "./Components/Admin/DashBoard";
import { BookingFrom } from "./Components/Pages/BookingFrom";
import { BookingTable } from "./Components/Pages/BookingTable";
import { UpdateTrain } from "./Components/Admin/UpdateTrain";
import SideBar from "./Components/Admin/SideBar";
import { CustomerInfo } from "./Components/Admin/CustomerInfo";
import { ReportAdmin } from "./Components/Admin/ReportAdmin";
import { Verification } from "./Components/Pages/Verification";
import { USER_TYPES } from "./Components/Pages/UserType";

export const userContext = createContext();

function App() {
  const [currentUserType, setCurrentUserType] = useState(USER_TYPES.PUBLIC);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setCurrentUserType(USER_TYPES.PUBLIC);
    }
  }, []);

  /*
      localstorage.removeItem("token");
  */

  return (
    <userContext.Provider value={{ currentUserType, setCurrentUserType }}>
      {(currentUserType === USER_TYPES.NORMAL_USERS ||
        currentUserType === USER_TYPES.PUBLIC) && (
        <Navbar setUserType={setCurrentUserType} />
      )}

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
    </userContext.Provider>
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
          <Route path="/BookingFrom" element={<BookingFrom />} />
          <Route path="/UpdateTrain" element={<UpdateTrain />} />
          <Route path="/CustomerInfo" element={<CustomerInfo />} />
          <Route path="/ReportAdmin" element={<ReportAdmin />} />
          <Route path="/BookingTable" element={<BookingTable />} />
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
    if (currentUserType === USER_TYPES.PUBLIC || currentUserType === USER_TYPES.NORMAL_USERS) {
      {
        return <> {children}</>;
      }
    }
  }
}

export default App;
