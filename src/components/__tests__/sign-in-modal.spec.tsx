import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { SignInModal } from '../sign-in-modal'

jest.mock('next-auth/react')

describe('<SignInModal />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<SignInModal onClose={() => { }} open />)
    expect(container).toBeInTheDocument()
  })

  it('should be to render correctly when open is false', async () => {
    const { queryByTestId } = render(<SignInModal onClose={() => { }} open={false} />)
    expect(queryByTestId('sign-in-modal')).toBeNull()
  })
})