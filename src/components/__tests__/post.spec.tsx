import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Header } from '../header'
import { Post } from '../post'

describe('<Post />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(
      <Post
        bookAuthorName=''
        bookCoverUrl='/public/images/books/clean-code.jpg'
        bookId=''
        bookName=''
        description=''
        id=''
        makedAt={new Date()}
        rate={3}
        dontShowHeaderOfUser
        userCoverUrl=''
        userId=''
        userName=''
      />
    )
    expect(container).toBeInTheDocument()
  })
})