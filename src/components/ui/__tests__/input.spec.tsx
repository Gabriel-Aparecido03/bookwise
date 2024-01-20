import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Input } from '../input'

describe('<Input />' ,() => {
  it('should be to render correctly',() => {
    const { container } = render(<Input />)
    expect(container).toBeInTheDocument()
  })
})