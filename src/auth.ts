import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Adapter } from "next-auth/adapters";
import prisma from "./lib/prisma";
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  theme:{
    logo:"/heisenberg.png"
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [Google,GitHub],
})