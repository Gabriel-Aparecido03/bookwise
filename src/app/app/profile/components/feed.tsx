'use client'

import { api } from "@/app/lib/axios";
import { Post } from "@/components/post";
import { BookRateByUserPresenter } from "@/interfaces/presenter/book-rate-by-user";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react"; 

export function Feed() {
  const [rates , setRates ] = useState<BookRateByUserPresenter[]>([])
  const { data } = useSession()

  async function fetchingRates() {
    const res = await api.get(`/user/${data?.user?.email}/ratings`)
    if(res.status === 200 ) setRates(res.data.rates)
  }

  useEffect(()=>{
    fetchingRates()
  },[])

  return (
    <div className="flex flex-col flex-1 gap-5 mt-5">
      {
        rates.map( rate => 
        <Post 
          bookAuthorName={rate.bookAuthorName}
          bookCoverUrl={rate.bookCoverUrl}
          bookId={rate.bookId}
          bookName={rate.bookName}
          description={rate.description}
          id={rate.id}
          makedAt={rate.makedAt}
          rate={rate.rate}
          key={rate.id} 
          dontShowHeaderOfUser
        />
      )}
    </div>
  )
}