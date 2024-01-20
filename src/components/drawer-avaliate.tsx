'use client'

import { useEffect, useState } from "react";
import { api } from "@/app/lib/axios";
import { BookInfosAndRatingsPresenter } from "@/interfaces/presenter/book-infos-and-ratings-presenter";
import { AvaliateBook } from "./avaliate-book";
import { Comments } from "./comments";
import { SendRate } from "./send-rate";
import { useSession } from "next-auth/react";

interface DrawerAvaliatePropsType {
  bookId: string
  isOpen: boolean
  onClose: () => void
}

export function DrawerAvaliate({ bookId, isOpen, onClose }: DrawerAvaliatePropsType) {

  const [book, setBook] = useState<BookInfosAndRatingsPresenter>()
  const [ openRate , setOpenRate ] = useState(false)
  const [ description , setDescription ] = useState('')
  const [rate, setRate ] = useState(0)
  const session = useSession()

  async function fetchingBookInfos() {
    const res = await api.get(`/book/${bookId}`)
    if (res.status === 200) {
      setBook(res.data.book)
    }
  }

  async function makingBookRating() {
   await api.post('/rate', {
      description,
      rate,
      bookId: bookId,
      userEmail: session?.data?.user?.email
    })
  }

  useEffect(() => {
    fetchingBookInfos()
  }, [])

  if (!isOpen || !book) return null

  return (
    <div id="drawer-avaliate" date-testid="drawer-avaliate" className="fixed bg-black/60 h-screen w-screen flex justify-end top-0 left-0">
      <div onClick={onClose} className="flex-1 flex" />
      <div className="overflow-auto bg-gray-800 px-12 py-[4rem] w-1/2 w-max-[41.25rem]">
        <AvaliateBook
          autor={book.authorName}
          category={book.category}
          coverUrl={`/${book.coverUrl.split('/')[3].split('.')[0].concat('.png')}`}
          name={book.name}
          avarageRate={book.avarageRating}
          totalAvaliations={book.rates.length}
          totalPages={book.totalPages}
        />
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <span className="text-s text-gray-200">Avaliations</span>
            {!openRate && session.status === "authenticated" && <button onClick={()=> { setOpenRate(true)} } className="text-purple-100 font-bold" >Send</button>}
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <SendRate 
              isOpen={openRate}
              description={description}
              onSend={makingBookRating}
              rate={rate}
              setDescription={setDescription}
              setRate={setRate}
              onClose={() =>{ setOpenRate(false)}}
            />
            {
              book.rates.map(rate =>
                <Comments
                  key={rate.id}
                  description={rate.description}
                  makedAt={rate.makeAt}
                  rate={rate.rate}
                  userCoverUrl={rate.userCoverUrl}
                  userName={rate.userName}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  )
}