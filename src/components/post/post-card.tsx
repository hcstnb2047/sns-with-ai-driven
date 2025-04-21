import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Repeat2, Heart } from "lucide-react";
import Link from "next/link";

interface PostCardProps {
  username: string;
  handle: string;
  timestamp: string;
  content: string;
}

export function PostCard({ username, handle, timestamp, content }: PostCardProps) {
  return (
    <div className="p-4 hover:bg-accent/5">
      <div className="flex gap-4">
        <Link href={`/${handle}`} className="flex-shrink-0">
          <Avatar>
            <AvatarImage src={`https://api.dicebear.com/7.x/personas/svg?seed=${handle}`} />
            <AvatarFallback>{username[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Link href={`/${handle}`} className="font-bold hover:underline">
              {username}
            </Link>
            <span className="text-muted-foreground">@{handle}</span>
            <span className="text-muted-foreground">・</span>
            <span className="text-muted-foreground">{timestamp}</span>
          </div>
          <p>{content}</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-blue-500">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-green-500">
              <Repeat2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-red-500">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 