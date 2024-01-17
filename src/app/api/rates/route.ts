import { prisma } from "@/app/lib/prisma/prisma";
import { FeedPresenter } from "@/interfaces/presenter/feed-presenter";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.rating.findMany({
    include : {
      user : true,
      book : true
    },
    orderBy : {
      created_at : 'desc'
    }
  })  

  const rates : FeedPresenter[] = result.map( rate => {
    return {
      bookAuthorName : rate.book.author,
      bookCoverUrl : rate.book.cover_url ?? '',
      userCoverUrl : rate.user.image ?? '',
      userId : rate.user.id ?? '',
      userName : rate.user.name ?? '',
      bookId : rate.book.id,
      bookName : rate.book.name,
      id : rate.id,
      makedAt : rate.created_at,
      rate : rate.rate,
      description : rate.description
    }
  })

  return NextResponse.json({ rates })
}