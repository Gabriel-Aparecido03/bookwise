import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Feed } from '../feed'

jest.mock('axios')

describe('<Feed />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<Feed />)
    expect(container).toBeInTheDocument()
  })
})