import { MainLayout } from "@/components/layout/main-layout";
import { PostCard } from "@/components/post/post-card";
import { PostForm } from "@/components/post/post-form";
import { generateDummyPosts } from "@/lib/utils";

export default function Home() {
  const dummyPosts = generateDummyPosts(20);

  return (
    <MainLayout>
      <main className="flex-1 border-x max-w-2xl w-full mx-auto min-h-screen">
        <div className="sticky top-0 z-10 border-b bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <h1 className="text-xl font-bold">ホーム</h1>
        </div>
        <div className="flex flex-col">
          <div className="border-b p-4">
            <PostForm />
          </div>
          <div className="flex-1">
            <div className="space-y-4 p-4">
              {dummyPosts.map((post) => (
                <PostCard
                  key={post.id}
                  username={post.username}
                  handle={post.handle}
                  timestamp={post.timestamp}
                  content={post.content}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
