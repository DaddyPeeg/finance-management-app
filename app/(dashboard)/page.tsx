import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return <UserButton afterSignOutUrl="/" />;
}
