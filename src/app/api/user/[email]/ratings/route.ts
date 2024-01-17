import { prisma } from "@/app/lib/prisma/prisma";
import { BookRateByUserPresenter } from "@/interfaces/presenter/book-rate-by-user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params: { email } }: { params: { email: string } }) {

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email
    }
  })

  const result = await prisma.rating.findMany({
    include : {
      user : true,
      book : true
    },
    where : {
      user_id : user.id
    }
  })  

  const rates : BookRateByUserPresenter[] = result.map( rate => {
    return {
      bookAuthorName : rate.book.author,
      bookCoverUrl : rate.book.cover_url,
      userCoverUrl : rate.user.image,
      bookId : rate.book.id,
      id : rate.id,
      makedAt : rate.created_at,
      rate : rate.rate,
      description : rate.description,
      bookName : rate.book.name
    }
  })

  return NextResponse.json({ rates })
}