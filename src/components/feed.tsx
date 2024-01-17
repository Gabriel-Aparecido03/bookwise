'use client'

import { api } from "@/app/lib/axios";
import { FeedPresenter } from "@/interfaces/presenter/feed-presenter";
import { useEffect, useState } from "react";
import { Post } from "./post";

export function Feed() {
  const [rates, setRates] = useState<FeedPresenter[]>([])

  async function fetchingRates() {
    try {
      const res = await api.get('/rates')
      if (res.status === 200) setRates(res.data.rates)
    } catch (error) {
      setRates([])
    }
  }

  /* useEffect(() => {
    fetchingRates()
  }, []) */

  return (
    <div className="flex flex-col gap-5 mt-5 w-[700px]">
      {
        rates.map(rate =>
          <Post
            bookAuthorName={rate.bookAuthorName}
            bookCoverUrl={rate.bookCoverUrl}
            bookId={rate.bookId}
            bookName={rate.bookName}
            description={rate.description}
            id={rate.id}
            makedAt={rate.makedAt}
            rate={rate.rate}
            userCoverUrl={rate.userCoverUrl}
            userId={rate.userId}
            userName={rate.userName}
            key={rate.id}
          />
        )}
    </div>
  )
}