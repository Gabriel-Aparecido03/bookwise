import { prisma } from "@/app/lib/prisma/prisma"
import { BookInfosAndRatingsPresenter } from "@/interfaces/presenter/book-infos-and-ratings-presenter"
import { NextRequest, NextResponse } from "next/server"

export async function GET(_: NextRequest, { params: { id } }: { params: { id: string } }) {

  const result = await prisma.book.findUniqueOrThrow({
    where: {
      id
    },
    include: {
      categories: {
        include: {
          category: true
        }
      },
      ratings: {
        include: {
          user: true,
        }
      }
    }
  })

  let totalRate = 0

  result.ratings.map(rate => totalRate += rate.rate)
  const lengthOfRating = result.ratings.length
  const avarageOfRate = totalRate / lengthOfRating

  const book: BookInfosAndRatingsPresenter = {
    authorName: result.author,
    avarageRating: avarageOfRate,
    category : result.categories.map( category => category.category.name ),
    coverUrl : result.cover_url,
    name : result.name,
    bookId : result.id,
    totalPages : result.total_pages,
    rates : result.ratings.map( rate => {
      return {
        description : rate.description,
        makeAt : rate.created_at,
        rate : rate.rate,
        userCoverUrl : rate.user.image ?? '',
        userName : rate.user.name ?? '',
        userId : rate.user.id ?? '',
        id : rate.id ?? ''
      }
    })
  }

  return NextResponse.json({ book: book })
}