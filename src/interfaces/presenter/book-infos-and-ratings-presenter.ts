type Rate = {
  userId : string
  userName : string
  userCoverUrl : string
  rate : number
  description : string
  makeAt : Date
  id : string
}

export interface BookInfosAndRatingsPresenter {
  bookId : string
  name : string
  authorName : string
  coverUrl : string
  avarageRating : number
  category : string[]
  totalPages : number
  rates : Rate[]
}

