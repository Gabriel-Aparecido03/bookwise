import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import type { NextAuthConfig, User } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import process from "process";
import { prisma } from "../prisma/prisma";
declare module "next-auth" {
  interface Session {
    user: {
      picture?: string;
    } & Omit<User, "id">;
  }
}

export const authConfig = {
  secret: process.env.JWT_SECRET,
  session: { strategy: 'jwt' },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      allowDangerousEmailAccountLinking: true,
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({ 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_SECRET_ID, 
      allowDangerousEmailAccountLinking: true, 
    }),
  ],
  callbacks : {
    redirect() {
      return 'http://localhost:3000/app'
    },
  }
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
