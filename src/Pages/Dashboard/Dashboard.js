import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/UseAdmin';


const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className="text-3xl font-bold text-purple-500">Welcome to Your Dashboard</h2>
        <Outlet></Outlet>
        
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
          { !admin && <>
            <Link to="/dashboard/myorders">My Orders</Link>
            <Link to="/dashboard/myreview">My Reviews</Link>
            <Link to="/dashboard/addreview">Add Reviews</Link>
          </>}
          </li>
          
          <li>
          <Link to="/dashboard">My Profile</Link>
          </li>
          <li>
          { admin && <>
            <Link to="/dashboard/allusers">All Users</Link>
            <Link to="/dashboard/addproduct">Add Product</Link>
            <Link to="/dashboard/manageproduct">Manage Product</Link>
          </>}
          </li>
        </ul>
      </div>
    </div>
    );
};

export default Dashboard;