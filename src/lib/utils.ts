import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateDummyPosts(count: number) {
  const posts = [];
  const contents = [
    "これはサンプルの投稿です。",
    "今日は良い天気ですね！",
    "新しい機能を開発中です。",
    "みなさん、こんにちは！",
    "プログラミングは楽しい！",
    "Next.jsとTypeScriptの組み合わせは最高です。",
    "AIの進化が楽しみです。",
    "今日も一日頑張りましょう！",
  ];

  for (let i = 0; i < count; i++) {
    posts.push({
      id: i + 1,
      username: `ユーザー${i + 1}`,
      handle: `user${i + 1}`,
      timestamp: `${Math.floor(Math.random() * 24)}時間前`,
      content: contents[Math.floor(Math.random() * contents.length)],
    });
  }

  return posts;
}
