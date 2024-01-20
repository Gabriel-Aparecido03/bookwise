import '@testing-library/jest-dom'
import { render } from '@/app/tests/test-util'
import { DrawerAvaliate } from '../drawer-avaliate'

jest.mock("next-auth/react")

describe('<DrawerAvaliate />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<DrawerAvaliate bookId='' isOpen onClose={() => {} } />)
    expect(container).toBeInTheDocument()
  })

  it('should be to render correctly with isOpen false', async () => {
    const { queryByTestId  } = render(<DrawerAvaliate bookId='' isOpen={false} onClose={() => {} } />)
    expect(queryByTestId('drawer-avaliate')).toBeNull()
  })
})