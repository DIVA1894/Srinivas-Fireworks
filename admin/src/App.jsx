import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSidebar from "./Components/SideBar";
import CrackersPage from "./Pages/Crackers/Crackers";
import OrdersPage from "./Pages/Orders";
import ReportPage from "./Pages/Report";
import AddCracker from "./Pages/Crackers/addCrackers";
import UpdateCracker from "./Pages/Crackers/updateCracker";

function App() {
  return (
    <Router>
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 pl-[260px]">
          <Routes>
            <Route path="/" element={<CrackersPage />} />
            <Route path="/admin/crackers" element={<CrackersPage />} />
            <Route path="/add-cracker" element={<AddCracker />} />
            <Route path="/update-cracker/:id" element={<UpdateCracker />} />
            <Route path="/admin/orders" element={<OrdersPage />} />
            <Route path="/admin/report" element={<ReportPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
