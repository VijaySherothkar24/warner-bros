import { FaCog, FaEnvelope, FaHome, FaUser } from "react-icons/fa"; // Import the icons you want to use
import IndexOfDashboard from "./../dashboard/IndexOfDashboard";
// Page layout types
const pageType = {
  DASHBOARD: "DASHBOARD",
};

// Sidebar links
const SIDE_BAR_LINKS = [
  { icon: <FaHome className="mr-2" />, label: "Home" },
  { icon: <FaUser className="mr-2" />, label: "Profile" },
  { icon: <FaCog className="mr-2" />, label: "Settings" },
  { icon: <FaEnvelope className="mr-2" />, label: "Messages" },
];

// Navbar links
const NAV_BAR_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Private route paths configuration
const privateRoutes = [
  {
    key: "dashboard", // Provide a unique key
    path: "",
    layoutType: pageType.DASHBOARD,
    component: <IndexOfDashboard />,
    loadingFallback: "<LoadingFallback />",
  },
  {
    key: "not_found",
    path: "*",
    layoutType: pageType.DASHBOARD,
    component: "Not found!",
    loadingFallback: null,
  },
];
// Public Routes
const publicRoutes = [
  {
    key: "home", // Provide a unique key
    path: "/home",
    layoutType: null,
    component: "<Sample />",
    loadingFallback: "<LoadingFallback />",
  },
];

// Exporting constants for use in other modules
export { NAV_BAR_LINKS, pageType, privateRoutes, publicRoutes, SIDE_BAR_LINKS };
