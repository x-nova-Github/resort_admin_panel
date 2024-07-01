import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
import DeviceList from "./components/pages/DeviceList/DeviceList";
import AppBar from "./components/shared/appbar/Appbar";
import ClickPhoto from "./components/pages/clickPhoto/ClickPhoto";
import LoginPage from "./components/pages/auth/loginPage/LoginPage";
import DashBoard from "./components/pages/dashboard/DashBoard";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import RefillStockForm from "./components/pages/refillStockForm/RefillStockForm";
import AddMachineForm from "./components/pages/addMachineForm/AddMachiceForm";
import ViewRefillDetails from "./components/pages/viewRefillDetails/ViewRefillDetails";

const App = () => {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/add-Activity" element={<RefillStockForm />} />
          <Route path="/all-Rooms" element={<AddMachineForm />} />
          <Route path="/refill-details" element={<ViewRefillDetails />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/home" element={<DeviceList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
