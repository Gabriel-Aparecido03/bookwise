import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Textarea } from '../textarea'

describe('<Textarea />' ,() => {
  it('should be to render correctly',() => {
    const { container } = render(<Textarea />)
    expect(container).toBeInTheDocument()
  })
})