import { SUB_LEVEL_LINKS, TOP_LEVEL_LINKS } from "@/constants/nav-links";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export const SideBar = ({ isDrawerOpen }: { isDrawerOpen: boolean }) => {
  const pathname = useLocation();
  return (
    <motion.aside
      className="h-dvh flex flex-col justify-between border-r border-gray-200 bg-white"
      initial={{
        width: isDrawerOpen ? "284px" : 0,
        opacity: isDrawerOpen ? 1 : 0,
      }}
      animate={{
        width: isDrawerOpen ? "284px" : 0,
        opacity: isDrawerOpen ? 1 : 0,
        visibility: isDrawerOpen ? "visible" : "hidden",
      }}
      aria-label="sidebar"
      aria-expanded={isDrawerOpen}
      role="complementary"
    >
      <header className="flex items-center gap-x-3 py-6 px-4">
        <Rocket size={26} className="text-blue-600" strokeWidth={1.6} />
        <h1 className="text-2xl font-semibold text-gray-700">Habit Coach</h1>
      </header>

      <nav
        aria-label="Primary navigation"
        className="flex-1 overflow-y-auto flex flex-col justify-between"
      >
        <ul className="list-none px-2 space-y-1">
          {TOP_LEVEL_LINKS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                to={href}
                className={cn(
                  `
                  flex items-center gap-x-4 text-gray-700 
                  hover:text-blue-600 hover:bg-blue-50
                  transition-colors duration-300 font-medium tracking-tight
                  px-4 py-3 rounded-full
                  focus-visible:outline-2 
                  focus-visible:outline-blue-600
                `,
                  pathname.pathname === href && "text-blue-600 bg-blue-50"
                )}
                aria-label={label}
              >
                <Icon aria-hidden="true" size={20} strokeWidth={2.2} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ul
          aria-label="Secondary navigation"
          className="list-none px-2 mt-6 space-y-1"
        >
          {SUB_LEVEL_LINKS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                to={href}
                className={cn(
                  `
                  flex items-center gap-x-4 text-gray-700 
                  hover:text-blue-600 hover:bg-blue-50 
                  transition-colors duration-300 font-medium tracking-tighter
                  px-4 py-3 rounded-full
                  focus-visible:outline-2 
                  focus-visible:outline-blue-600
                `,
                  pathname.pathname === href && "text-blue-600 bg-blue-50"
                )}
                aria-label={label}
              >
                <Icon aria-hidden="true" size={20} strokeWidth={2.2} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link to="/profile">
        <footer className="px-4 border-t border-gray-200 py-2 flex items-center gap-4 mt-2 cursor-pointer">
          <img
            src="/uploads/avatar/default.jpg"
            alt="Profile picture of Jeanne Dupont"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <span className="text-gray-900 font-semibold">Jeanne Dupont</span>
            <span className="text-xs text-gray-600">@jdupont — Profile</span>
          </div>
        </footer>
      </Link>
    </motion.aside>
  );
};
