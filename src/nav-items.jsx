import { Home, Key } from "lucide-react";
import Index from "./pages/Index.jsx";
import KeyManagement from "./pages/KeyManagement.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Key Management",
    to: "/key-management",
    icon: <Key className="h-4 w-4" />,
    page: <KeyManagement />,
  },
];