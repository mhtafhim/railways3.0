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
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  useEffect(() => {});
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <div className="mainContainer">
          <div className="containerChild">
            <SideBar
              openSidebarToggle={openSidebarToggle}
              OpenSidebar={OpenSidebar}
            />
          </div>

          <div className="containerChild">
            <Routes>
              <Route path="/railway" element={<Railway />} />
              <Route path="/Train Schedule" element={<TrainSchedule />} />
              <Route path="/LiveLocation" element={<LiveLocation />} />
              <Route path="/Booking" element={<Booking />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/DashBoard" element={<DashBoard />} />
              <Route path="/UpdateTrain" element={<UpdateTrain />} />
              <Route path="/CustomerInfo" element={<CustomerInfo />} />
              <Route path="/ReportAdmin" element={<ReportAdmin />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
