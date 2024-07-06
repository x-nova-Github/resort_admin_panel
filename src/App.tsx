import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";

import LoginPage from "./components/pages/auth/loginPage/LoginPage";
import DashBoard from "./components/pages/dashboard/DashBoard";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";

import ActivityTable from "./components/pages/activityTable/ActicityTable";
import BookingList from "./components/pages/bookingList/Bookinglist";

const App = () => {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/add-Activity" element={<ActivityTable />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/booking" element={<BookingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
