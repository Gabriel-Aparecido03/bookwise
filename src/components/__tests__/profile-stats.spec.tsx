import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { ProfileStats } from '../profile-stats'

jest.mock('next-auth/react')

describe('<ProfileStats />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<ProfileStats />)
    await waitFor(()=>{
      expect(container).toBeInTheDocument()
    }) 
  })
})