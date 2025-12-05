import { useToggler } from "@/store/toggler";
import { SideBar } from "../ui/SideBar";
import { DrawerButton } from "../ui/DrawerButton";
import { Wrapper } from "./Wrapper";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isDrawerOpen = useToggler((state) => state.isDrawerOpen);
  return (
    <div className="flex min-h-screen w-full">
      <SideBar isDrawerOpen={isDrawerOpen} />
      <main className="flex-1 bg-blue-100/50 relative max-h-dvh">
        <DrawerButton isDrawerOpen={isDrawerOpen} />
        <Wrapper>{children}</Wrapper>
      </main>
    </div>
  );
};
