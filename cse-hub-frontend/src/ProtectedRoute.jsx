// routes/ProtectedRoute.jsx
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

const ProtectedRoute = () => (
  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />
);

export default ProtectedRoute;
