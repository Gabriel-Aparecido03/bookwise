import { prisma } from "@/app/lib/prisma/prisma"
import { NextResponse } from "next/server"

export async function GET(req : Request) {
  const { email  } = JSON.parse(await req.text())

  const res = await prisma.user.findUnique({
    where : {
      email
    }
  })

  return NextResponse.json({ user : res ?? null })
} 