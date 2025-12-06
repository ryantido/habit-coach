import { FloatingSidebar } from "../ui/sidebar/FloatingSideBar";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { DrawerButton } from "../ui/DrawerButton";
import { SideBar } from "../ui/sidebar/SideBar";
import { useToggler } from "@/store/toggler";
import { Wrapper } from "./Wrapper";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const isDrawerOpen = useToggler((state) => state.isDrawerOpen);
  const { isMdUp } = useBreakpoint();

  return (
    <div className="flex min-h-screen w-full">
      {isMdUp ? (
        <SideBar isDrawerOpen={isDrawerOpen} />
      ) : (
        <FloatingSidebar isOpen={isDrawerOpen} />
      )}
      <main className="flex-1 bg-blue-100/50 relative max-h-dvh">
        <DrawerButton isDrawerOpen={isDrawerOpen} />
        <Wrapper>{children}</Wrapper>
      </main>
    </div>
  );
};
