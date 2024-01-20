import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ThumbnailBook } from '../thumbnail-book'

jest.mock("next-auth/react")

describe('<ThumbnailBook />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(
      <ThumbnailBook
        author=''
        coverUrl='/public/images/books/clean-code.jpg'
        id=''
        name=''
        rate={3}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('should be to render correctly with author', async () => {
    const { getByText } = render(
      <ThumbnailBook
        author='author-lorem'
        coverUrl='/public/images/books/clean-code.jpg'
        id=''
        name=''
        rate={3}
      />
    )
    expect(getByText('author-lorem')).toHaveClass('text-sm text-gray-400',{ exact : false })
  })

  it('should be to render correctly with name', async () => {
    const { getByText } = render(
      <ThumbnailBook
        author=''
        coverUrl='/public/images/books/clean-code.jpg'
        id=''
        name='name-lorem'
        rate={3}
      />
    )
    expect(getByText('name-lorem')).toHaveClass('font-bold text-gray-100',{ exact : false })
  })

  it('should be to render correctly with correct', async () => {
    const { queryAllByTestId } = render(
      <ThumbnailBook
        author=''
        coverUrl='/public/images/books/clean-code.jpg'
        id=''
        name='name-lorem'
        rate={3}
      />
    )
    expect(queryAllByTestId('stars-filled')).toHaveLength(3)
  })
})