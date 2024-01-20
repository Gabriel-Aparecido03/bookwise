import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Header } from '../header'

describe('<Header />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<Header />)
    expect(container).toBeInTheDocument()
  })
})