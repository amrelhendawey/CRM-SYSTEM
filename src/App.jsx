import HomePage from "./Pages/AdminPages/HomePage";
import AdminSignINPage from "./Pages/AdminPages/AdminSignINPage";
import { Route, Routes } from "react-router-dom";
import AppointmentsPage from "./Pages/AdminPages/AppointmentsPage";
import CustomerPage from "./Pages/AdminPages/AdminCustomersPage";
import AdminTicketsPage from "./Pages/AdminPages/AdminTicketsPage";
import AdminDashboardPage from "./Pages/AdminPages/AdminDashboardPage";
import AdminChatPage from "./Pages/AdminPages/AdminChatPage";
import UserDashboard from "./Pages/UserPages/UserDashboard";
import AdminConfirmClient from "./Pages/AdminPages/AdminConfirmClient";
import RegisterComp from "./Components/Forms/User/RegisterComp";
import SignINPage from "./Pages/UserPages/SignINPage";
import Sign from "./Pages//AdminPages/AdminSignINPage";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admindashboard" element={<AdminDashboardPage />} />
        <Route path="/signin" element={<AdminSignINPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/tickets" element={<AdminTicketsPage />} />
        <Route path="/chat" element={<AdminChatPage />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/confirmClients" element={<AdminConfirmClient />} />
        <Route path="/RegisterComp" element={<RegisterComp />} />
        <Route path="/SignINPage" element={<SignINPage />} />
        <Route path="/AdminSignINPage" element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;
