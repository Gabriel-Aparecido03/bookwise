import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Tag } from '../tag'

describe('<Tag />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<Tag id="" isSelected name=''  />)
    expect(container).toBeInTheDocument()
  })

  it('should be to render correctly with isSelected equal true', async () => {
    const { getByRole } = render(<Tag id="" isSelected name=''  />)
    expect(getByRole('button')).toHaveClass('border-purple-200 bg-purple-200',{ exact : false })
  })

  it('should be to render correctly with isSelected equal false', async () => {
    const { getByRole } = render(<Tag id="" isSelected={false} name=''  />)
    expect(getByRole('button')).toHaveClass('bg-transparent border-purple-100',{ exact : false })
  })
})