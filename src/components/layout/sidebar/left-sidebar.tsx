const navigationItems = [
  { icon: "🏠", label: "ホーム", href: "/" },
  { icon: "🔍", label: "検索", href: "/search" },
  { icon: "🔔", label: "通知", href: "/notifications" },
  { icon: "✉️", label: "メッセージ", href: "/messages" },
];

export function LeftSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 border-r bg-card p-4">
      <nav className="space-y-6">
        <div className="text-2xl font-bold">SNS with AI</div>
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-lg hover:bg-accent hover:text-accent-foreground"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
} 