import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { ProfileStats } from '../profile-stats'
import { SendRate } from '../send-rate'

jest.mock('next-auth/react')

describe('<SendRate />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(
      <SendRate
        description=''
        isOpen
        onClose={() => { }}
        onSend={() => { }}
        rate={3}
        setDescription={() => { }}
        setRate={() => { }}
      />
    )
    expect(container).toBeInTheDocument()
  })
})