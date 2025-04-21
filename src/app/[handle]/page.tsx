import { MainLayout } from "@/components/layout/main-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/post/post-card";
import { generateDummyPosts } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProfilePageProps {
  params: {
    handle: string;
  };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const userPosts = generateDummyPosts(10).map(post => ({
    ...post,
    username: `ユーザー${params.handle.replace("user", "")}`,
    handle: params.handle,
  }));

  const profile = {
    username: `ユーザー${params.handle.replace("user", "")}`,
    handle: params.handle,
    bio: "これはプロフィール文です。",
    followersCount: Math.floor(Math.random() * 1000),
    followingCount: Math.floor(Math.random() * 500),
    joinedDate: "2024年2月",
  };

  return (
    <MainLayout>
      <div className="flex justify-center">
        <main className="w-full max-w-2xl border-x">
          <div className="sticky top-0 z-10 border-b bg-background/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center gap-4">
              <Link href="/" className="hover:bg-accent rounded-full p-2">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold">{profile.username}</h1>
                <p className="text-sm text-muted-foreground">{userPosts.length}件の投稿</p>
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <div className="h-32 bg-accent"></div>
            <div className="px-4">
              <div className="relative">
                <Avatar className="absolute -top-12 h-24 w-24 border-4 border-background">
                  <AvatarImage src={`https://api.dicebear.com/7.x/personas/svg?seed=${profile.handle}`} />
                  <AvatarFallback>{profile.username[0]}</AvatarFallback>
                </Avatar>
                <div className="flex justify-end pt-2">
                  <Button variant="outline">プロフィールを編集</Button>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-bold">{profile.username}</h2>
                <p className="text-muted-foreground">@{profile.handle}</p>
                <p className="mt-3">{profile.bio}</p>
                <div className="mt-3 flex gap-4 text-sm text-muted-foreground">
                  <p>{profile.followingCount} フォロー中</p>
                  <p>{profile.followersCount} フォロワー</p>
                  <p>📅 {profile.joinedDate}に登録</p>
                </div>
              </div>
            </div>
          </div>

          <div className="divide-y">
            {userPosts.map((post) => (
              <PostCard
                key={post.id}
                username={post.username}
                handle={post.handle}
                timestamp={post.timestamp}
                content={post.content}
              />
            ))}
          </div>
        </main>
      </div>
    </MainLayout>
  );
} 