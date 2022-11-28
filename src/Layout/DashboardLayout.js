import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
// import useAdmin from '../hooks/useAdmin';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
           
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <li><Link to="/dashboard">My </Link></li> */}
                        {/* {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All sellers</Link></li>
                            </>
                        } */}
  <li><Link to="/myOrders">My Orders</Link></li>
  <li><Link to="/AddProduct">Add Product</Link></li>
  <li><Link to="/dashboard/allusers">All sellers,All Buyers</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;