import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function PostForm() {
  return (
    <div className="mb-4 rounded-xl border bg-card p-4">
      <Textarea
        className="min-h-[100px] resize-none bg-transparent text-lg"
        placeholder="いまどうしてる？"
      />
      <div className="mt-4 flex justify-end">
        <Button size="lg" className="rounded-full bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90">
          投稿する
        </Button>
      </div>
    </div>
  );
} 