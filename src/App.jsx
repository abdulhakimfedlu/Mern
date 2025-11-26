import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import EmployeeDashboard from './pages/EmployeeDashboard';
import OrdersDashboard from './pages/OrdersDashboard';

import ReservationDashboard from './pages/ReservationDashboard';
import FoodCategoryDashboard from './pages/FoodCategoryDashboard';
import FoodItemsDashboard from './pages/FoodItemsDashboard';
import ContactDashboard from './pages/ContactDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/orders" replace />} />
          <Route path="employees" element={<EmployeeDashboard />} />
          <Route path="orders" element={<OrdersDashboard />} />
          <Route path="orders" element={<OrdersDashboard />} />
          <Route path="reservations" element={<ReservationDashboard />} />
          <Route path="categories" element={<FoodCategoryDashboard />} />
          <Route path="menu-items" element={<FoodItemsDashboard />} />
          <Route path="messages" element={<ContactDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
