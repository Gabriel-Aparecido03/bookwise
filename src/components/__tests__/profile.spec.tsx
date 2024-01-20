import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { Profile } from '../profile'

jest.mock('next-auth/react')

describe('<Profile />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<Profile />)
    await waitFor(()=>{
      expect(container).toBeInTheDocument()
    }) 
  })
})