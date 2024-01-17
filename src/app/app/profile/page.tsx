import { ProfileStats } from "@/components/profile-stats";
import { Feed } from "./components/feed";
 
export default function Profile() {
  return (
    <div className="flex gap-4 pt-6 items-start">
      <Feed />
      <ProfileStats />
    </div>
  )
}