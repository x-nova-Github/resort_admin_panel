import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
import DeviceList from "./components/pages/DeviceList/DeviceList";
import LoginPage from "./components/pages/auth/loginPage/LoginPage";
import DashBoard from "./components/pages/dashboard/DashBoard";

const App = () => {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/add-Activity" element={<></>} />
          <Route path="/all-Rooms" element={<></>} />
          <Route path="/refill-details" element={<></>} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/home" element={<DeviceList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
