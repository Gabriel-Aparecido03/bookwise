'use client'

import { IoChevronForwardOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { BookPopular } from "@/interfaces/presenter/book-popular";
import { api } from "@/app/lib/axios";
import Link from "next/link";
import { ThumbnailBook } from "./thumbnail-book";

export function Bookshelf() {

  const [books, setBooks] = useState<BookPopular[]>([])

  async function fetchingPopularBooks() {
    const res = await api.get('/popular')
    if (res.status === 200) setBooks(res.data.popularBooks)
  }

  useEffect(() => {
    fetchingPopularBooks()
  },[])

  return (
    <div data-testid="book-shelf" className="pl-5">
      <header className="flex items-center justify-between mb-4">
        <p className="text-sm">Popular books</p>
        <Link className=" text-purple-100 flex items-center gap-3 font-bold" href="/app/explorer">See all <IoChevronForwardOutline /> </Link>
      </header>
      <div className="flex flex-col gap-3">
        {
          books.map(item =>
            <ThumbnailBook
              author={item.author}
              coverUrl={item.coverUrl}
              id={item.id}
              name={item.name}
              rate={item.rate}
              key={item.id}
            />
          )}
      </div>
    </div>
  )
}