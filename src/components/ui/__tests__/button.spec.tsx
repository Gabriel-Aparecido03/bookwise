import { Button } from '../button'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('<Button />' ,() => {
  it('should be to render correctly',() => {
    const { container } = render(<Button />)
    expect(container).toBeInTheDocument()
  })
})