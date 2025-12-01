import { useToggler } from "@/store/toggler";
import { PanelLeft, PanelRight } from "lucide-react";

export const DrawerButton = ({ isDrawerOpen }: { isDrawerOpen: boolean }) => {
  const toggleDrawer = useToggler((state) => state.toggleDrawer);
  return (
    <button
      onClick={toggleDrawer}
      aria-label={isDrawerOpen ? "Close sidebar" : "Open sidebar"}
      title={isDrawerOpen ? "Close sidebar" : "Open sidebar"}
      className="
          h-9 w-9 p-2
          rounded-md 
          transition duration-300
          cursor-pointer
          absolute top-4 left-4

          text-blue-600
          hover:bg-blue-100
          active:bg-blue-200/70
  
          focus:outline-none
          focus:ring-2 focus:ring-blue-500/70 focus:ring-offset-2
        "
    >
      {isDrawerOpen ? (
        <PanelLeft size={20} className="text-blue-700" />
      ) : (
        <PanelRight size={20} className="text-blue-700" />
      )}
    </button>
  );
};
