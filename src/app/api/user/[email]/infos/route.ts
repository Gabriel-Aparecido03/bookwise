import { prisma } from "@/app/lib/prisma/prisma";
import { findMostRepeatedItem } from "@/utils/find-most-repeated";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params: { email } }: { params: { email: string } }) {

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email
    }
  })

  const result = await prisma.rating.findMany({
    where: {
      user_id: user.id,
    },
    include: {
      book: {
        include: {
          categories: {
            include: {
              category: true
            },
          },
        }
      },
    }
  })

  

  let totalPagesReaded = 0
  let authorArray: string[] = []
  let readedBooks: string[] = []
  let allReadedCategories: string[] = []

  result.map(item => {
    totalPagesReaded += item.book.total_pages
    if (!authorArray.includes(item.book.author)) {
      authorArray.push(item.book.author)
    }
    if (!readedBooks.includes(item.book.name)) {
      readedBooks.push(item.book.name)
    }
    item.book.categories.map(catergory => allReadedCategories.push(catergory.category.name))

  })

  return NextResponse.json({
    userInfo: {
      userPhoto: user.image,
      userName: user.name,
      createdAt: new Date(),
      ratedBooks: readedBooks.length,
      authors: authorArray.length,
      mostReadedCategory: findMostRepeatedItem(allReadedCategories),
      totalPagesReaded
    }
  })
}