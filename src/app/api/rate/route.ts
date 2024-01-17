import { prisma } from "@/app/lib/prisma/prisma"
import { NextRequest } from "next/server"

interface NextResponseBody {
  userEmail : string
  bookId : string
  description : string
  rate : number
}

export async function POST(res : NextRequest) {
   
  const { bookId ,description ,rate ,userEmail  } = JSON.parse(await res.text()) as NextResponseBody

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email : userEmail
    }
  })

  await prisma.rating.create({
    data :{
      description,
      rate: Number(rate),
      book_id: bookId,
      user_id : user.id
    }
  })

  return new Response('',{ status: 201 })
}