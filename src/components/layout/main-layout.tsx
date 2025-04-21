import { ReactNode } from "react";
import { LeftSidebar } from "./sidebar/left-sidebar";
import { RightSidebar } from "./sidebar/right-sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="fixed left-0 top-0 w-72 h-screen">
        <LeftSidebar />
      </div>
      <div className="flex-1 ml-72 mr-80">
        {children}
      </div>
      <div className="fixed right-0 top-0 w-80 h-screen">
        <RightSidebar />
      </div>
    </div>
  );
} 