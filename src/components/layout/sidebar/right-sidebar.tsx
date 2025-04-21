interface TrendItem {
  category: string;
  hashtag: string;
  postCount: number;
}

const trendItems: TrendItem[] = [
  { category: "トレンド1", hashtag: "hashtag1", postCount: 1234 },
  { category: "トレンド2", hashtag: "hashtag2", postCount: 5678 },
];

export function RightSidebar() {
  return (
    <aside className="fixed right-0 top-0 h-full w-80 border-l bg-card p-4">
      <div className="rounded-xl border bg-card/50 p-4">
        <h2 className="text-lg font-bold">トレンド</h2>
        <div className="mt-4 space-y-6">
          {trendItems.map((item) => (
            <div key={item.hashtag} className="space-y-1">
              <p className="text-sm text-muted-foreground">{item.category}</p>
              <p className="font-bold">#{item.hashtag}</p>
              <p className="text-sm text-muted-foreground">{item.postCount.toLocaleString()} 投稿</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
} 