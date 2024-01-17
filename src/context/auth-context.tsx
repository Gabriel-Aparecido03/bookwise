import { auth } from "@/app/lib/next-auth/auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default async function AuthContextProvider({ children }: { children: ReactNode }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
