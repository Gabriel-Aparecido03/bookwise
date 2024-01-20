import NextAuth, { AuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import process from "process";
import { prisma } from "../prisma/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

export const authConfig = {
  secret: process.env.JWT_SECRET,
  session: { strategy: 'jwt' },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GitHub({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    Google({ 
      clientId: process.env.GOOGLE_CLIENT_ID as string, 
      clientSecret: process.env.GOOGLE_SECRET_ID as string, 
      allowDangerousEmailAccountLinking: true, 
    }),
  ],
  callbacks : {
    redirect() {
      return 'http://localhost:3000/app'
    },
  }
} satisfies AuthOptions ;

export const handler = NextAuth(authConfig);
export default NextAuth(authConfig);
