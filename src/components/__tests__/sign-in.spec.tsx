import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Header } from '../header'
import { SignInLikeGuest, SignInWithGithub, SignWithGoogle } from '../sign-in'

describe('<SignIn />', () => {

  it('should be to render correctly with google', async () => {
    const { container } = render(<SignWithGoogle />)
    expect(container).toBeInTheDocument()
  })

  it('should be to render correctly with google', async () => {
    const { getByText } = render(<SignWithGoogle />)
    expect(getByText('Sign in with Google')).toBeInTheDocument()
  })

  it('should be to render correctly with github', async () => {
    const { container } = render(<SignWithGoogle />)
    expect(container).toBeInTheDocument()
  })

  it('should be to render correctly with github', async () => {
    const { getByText } = render(<SignInWithGithub />)
    expect(getByText('Sign in with Github')).toBeInTheDocument()
  })

  it('should be to render correctly with github', async () => {
    const { container } = render(<SignInWithGithub />)
    expect(container).toBeInTheDocument()
  })

  it('should be to render correctly with guest', async () => {
    const { getByText } = render(<SignInLikeGuest />)
    expect(getByText('Sign in with Guest')).toBeInTheDocument()
  })
})