import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Rocket, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SUB_LEVEL_LINKS, TOP_LEVEL_LINKS } from "@/constants/nav-links";
import { useToggler } from "@/store/toggler";

export const FloatingSidebar = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = useLocation();
  const navigate = useNavigate();
  const toggleDrawer = useToggler((state) => state.toggleDrawer);

  const handleNavigate = (href: string) => {
    navigate(href);
    toggleDrawer();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={toggleDrawer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            aria-hidden="true"
          />

          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Sidebar"
            className={cn(
              "fixed inset-4 z-50 mx-auto max-w-sm h-fit rounded-xl bg-white/95 backdrop-blur-xl shadow-2xl border overflow-hidden flex flex-col pb-6"
            )}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.22, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 10,
              transition: { duration: 0.18 },
            }}
          >
            <header className="flex items-center justify-between gap-x-3 py-4 px-4 border-b border-gray-200">
              <div className="flex items-center gap-x-3">
                <Rocket size={26} className="text-blue-600" strokeWidth={1.6} />
                <h1 className="text-2xl font-semibold text-gray-700">
                  Habit Coach
                </h1>
              </div>
              <button
                onClick={toggleDrawer}
                aria-label="Close sidebar"
                className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-gray-200/50 transition focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:ring-offset-2"
              >
                <X size={20} />
              </button>
            </header>

            <nav className="flex-1 overflow-y-auto px-2 py-4 flex flex-col gap-y-2">
              <ul className="space-y-1">
                {TOP_LEVEL_LINKS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <button
                      onClick={() => handleNavigate(href)}
                      className={cn(
                        "w-full flex items-center gap-x-4 px-4 py-3 rounded-full text-left",
                        "text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors",
                        pathname.pathname === href && "text-blue-600 bg-blue-50"
                      )}
                    >
                      <Icon size={20} strokeWidth={2.2} />
                      <span>{label}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 space-y-1">
                {SUB_LEVEL_LINKS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <button
                      onClick={() => handleNavigate(href)}
                      className={cn(
                        "w-full flex items-center gap-x-4 px-4 py-3 rounded-full text-left",
                        "text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors",
                        pathname.pathname === href && "text-blue-600 bg-blue-50"
                      )}
                    >
                      <Icon size={20} strokeWidth={2.2} />
                      <span>{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              to="/profile"
              onClick={toggleDrawer}
              className="mt-4 px-4 flex items-center gap-3 cursor-pointer"
            >
              <img
                src="/uploads/avatar/default.jpg"
                alt="Profile picture of Jeanne Dupont"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-gray-900 font-semibold text-sm">
                  Jeanne Dupont
                </span>
                <span className="text-gray-500 text-xs">
                  @jdupont — Profile
                </span>
              </div>
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
