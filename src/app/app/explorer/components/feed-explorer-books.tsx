'use client'

import { ThumbnailBook } from "@/components/thumbnail-book"
import { useBooks } from "../hook/useBooks"
 
export function FeedExplorerBooks() {
  const { books } = useBooks()

  return (
    <div className="flex items-center justify-center gap-5 flex-wrap relative">
      {
        books?.map(book =>
          <ThumbnailBook
            author={book.autor}
            coverUrl={book.coverUrl}
            id={book.id}
            name={book.name}
            key={book.id}
            rate={book.rate}
          />)
      }
    </div>
  )
}