import { prisma } from "@/app/lib/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.category.findMany({})
  return NextResponse.json({ categories : result })
}