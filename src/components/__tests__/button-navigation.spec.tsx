import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ButtonNavigation } from '../button-navigation'
import { CiUser } from "react-icons/ci";
describe('<ButtonNavigation />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(
      <ButtonNavigation
        icon={<CiUser />}
        text='test-button-navigation'
        to='/test-link'
        isSelect={false}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('should be to render correctly link attribute', async () => {
    const { getByRole } = render(
      <ButtonNavigation
        icon={<CiUser />}
        text='test-button-navigation'
        to='/test-link'
        isSelect={false}
      />
    )
    expect(getByRole('link')).toHaveAttribute('href','/test-link')
  })

  it('should be to render correctly text attribute', async () => {
    const { getByTestId } = render(
      <ButtonNavigation
        icon={<CiUser data-testid="icon-test" />}
        text='test-button-navigation'
        to='/test-link'
        isSelect={false}
      />
    )
    expect(getByTestId('icon-test')).not.toBeNull()
  })
})