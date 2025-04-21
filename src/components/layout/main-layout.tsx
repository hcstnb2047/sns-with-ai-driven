import { ReactNode } from "react";
import { LeftSidebar } from "./sidebar/left-sidebar";
import { RightSidebar } from "./sidebar/right-sidebar";
import { BottomNav } from "./nav/bottom-nav";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-screen-xl items-start">
        {/* デスクトップサイドバー */}
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-[275px] lg:flex-col lg:py-4">
          <LeftSidebar />
        </div>

        {/* メインコンテンツ */}
        <main className="flex-1">
          {children}
        </main>

        {/* 右サイドバー */}
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-[350px] lg:flex-col lg:py-4">
          <RightSidebar />
        </div>
      </div>

      {/* モバイルボトムナビゲーション */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 border-t bg-background z-50">
        <BottomNav />
      </div>
    </div>
  );
} 