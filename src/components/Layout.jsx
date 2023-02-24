import Navbar from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from 'context/AuthContext';

const Layout = () => (
  <div className="wrapper">
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  </div>
);
export default Layout;
