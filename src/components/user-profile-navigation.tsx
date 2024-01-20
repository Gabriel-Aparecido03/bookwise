import { LuUser } from "react-icons/lu";
import { ButtonNavigation } from "./button-navigation";
import { useSession } from "next-auth/react";

interface UserProfileNavigationPropsType {
  isSelected ?: boolean
}

export function UserProfileNavigation({ isSelected = false }:UserProfileNavigationPropsType) {
  const user = useSession()
  if(user?.status === "authenticated") return (
    <ButtonNavigation
      icon={<LuUser />}
      text='Profile'
      to='/app/profile'
      isSelect={isSelected}
    />
  )
}