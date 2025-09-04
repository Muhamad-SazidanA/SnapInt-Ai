import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaBullhorn, FaFileAlt, FaFolder, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaTachometerAlt, FaCalendarAlt, FaFolderOpen, FaBell, FaUserCircle, FaRobot, FaChartPie } from 'react-icons/fa';

export default function AdminTemplate() {
    const [, setActiveMenu] = useState("Dashboard");
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            localStorage.removeItem('token');
        } catch {
            // ignore
        }
        // navigate back to user dashboard and replace history so back doesn't return to admin
        navigate('/', { replace: true });
    };

    const menus = [
        { name: "Dashboard", icon: <FaChartPie />, path: "/admin/dashboardadmin" },
        { name: "Blog", icon: <FaBullhorn />, path: "/admin/blog" },
        { name: "Event", icon: <FaCalendarAlt />, path: "/admin/events" },
        { name: "Case Study", icon: <FaFolderOpen />, path: "/admin/casestudy" },
    ];

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-60 bg-[#F0F7FF] p-4 flex flex-col">
                <div className="flex justify-center items-center gap-3 mb-8 mt-6">
                    <div className="rounded-full bg-primary-100 p-2">
                        <FaRobot size={26} className="text-primary-800" />
                    </div>
                    <div>
                        <span className="text-2xl font-bold">Manusia AI</span>
                        <div className="text-xs text-gray-500">Admin Portal</div>
                    </div>
                </div>
                <nav className="flex flex-col gap-1">
                    {menus.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.path}
                            onClick={() => setActiveMenu(item.name)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${isActive ? "bg-primary-100 text-primary-800 font-semibold" : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            <span>{item.icon}</span>
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Content area */}
            <main className="flex-1 bg-white p-6">
                <div className="flex justify-end items-center gap-4">
                    <div className="flex items-center gap-3 text-gray-600">
                        <div className="text-sm">Usage and plan</div>
                        <FaBell className="text-gray-500" />
                        <FaCog className="text-gray-500" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col text-right mr-2">
                            <span className="text-sm font-medium">Admin</span>
                            <span className="text-xs text-gray-500">Superuser</span>
                        </div>
                        <FaUserCircle size={28} className="text-gray-600" />
                        <button
                            onClick={handleLogout}
                            title="Logout"
                            className="ml-2 flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded hover:bg-red-100 transition"
                        >
                            <FaSignOutAlt />
                            <span className="text-sm">Keluar</span>
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}