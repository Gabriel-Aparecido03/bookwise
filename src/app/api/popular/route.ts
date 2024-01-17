import { prisma } from "@/app/lib/prisma/prisma";
import { BookPopular } from "@/interfaces/presenter/book-popular";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.book.findMany({
    orderBy : {
      ratings : {
        _count : 'desc'
      }
    },
    include : {
      ratings : true
    },
    take : 5
  })

  const popularBooks: BookPopular[] = result.map(item => {
    let totalRate = 0

    item.ratings.map(rate => totalRate += rate.rate)
    const lengthOfRating = item.ratings.length
    const avarageOfRate = totalRate / lengthOfRating

    return {
      author : item.author,
      coverUrl : item.cover_url,
      id : item.id,
      name : item.name,
      rate : avarageOfRate
    }
  })

  return NextResponse.json({ popularBooks })
}