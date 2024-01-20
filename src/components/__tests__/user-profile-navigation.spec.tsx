import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { UserProfileNavigation } from '../user-profile-navigation'

jest.mock("next-auth/react")

describe('<UserProfileNavigation />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<UserProfileNavigation />)
    expect(container).toBeInTheDocument()
  })
})