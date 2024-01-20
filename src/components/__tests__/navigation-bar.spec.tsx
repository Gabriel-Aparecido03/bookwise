import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { NavigationBar } from '../navigation-bar'

jest.mock('next-auth/react')

describe('<NavigationBar />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<NavigationBar />)
    expect(container).toBeInTheDocument()
  })
})

