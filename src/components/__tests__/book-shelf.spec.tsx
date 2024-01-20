import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Bookshelf } from '../book-shelf'

describe('<BookShelf />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<Bookshelf />)
    expect(container).toBeInTheDocument()
  })
})