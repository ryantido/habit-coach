import type { ReactNode } from "react";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto size-full px-6 py-16">{children}</div>
  );
}
