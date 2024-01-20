import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { TagsCollections } from '../tags-collection'

describe('<TagsCollections />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<TagsCollections />)
    expect(container).toBeInTheDocument()
  })
})