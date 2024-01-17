import { prisma } from "@/app/lib/prisma/prisma";
import { BookPresenter } from "@/interfaces/presenter/book-presenter";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await prisma.book.findMany({
    include : {
      ratings : {
        include : {
          book : true
        }
      },
      categories : {
        include : {
          category : true
        }  
      },
    },
    orderBy : {
      ratings : {
        _count : 'desc'
      }
    }
  })

  const books : BookPresenter[] = result.map( item => {
    let totalRate = 0

    item.ratings.map( rate =>totalRate += rate.rate )
    const lengthOfRating = item.ratings.length
    const avarageOfRate = totalRate / lengthOfRating

    return {
      autor : item.author,
      category : item.categories.map( category => category.category.name ),
      coverUrl : item.cover_url,
      id : item.id,
      rate : avarageOfRate,
      name : item.name
    }
  })

  return NextResponse.json({ books })
}