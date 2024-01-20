import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { StartsRate } from '../stars-rate'

jest.mock('next-auth/react')

describe('<StarsRate />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(<StartsRate rate={3} />)
    expect(container).toBeInTheDocument()
  })

  it('should be to render correctly with correct stars', async () => {
    const { queryAllByTestId } = render(<StartsRate rate={3} />)
    expect(queryAllByTestId('stars-filled')).toHaveLength(3)
  })

  it('should be to render correctly with correct filled stars', async () => {
    const { queryAllByTestId } = render(<StartsRate rate={3} />)
    expect(queryAllByTestId('stars-filled')).toHaveLength(3)
  })

  it('should be to render correctly with correct not filled stars', async () => {
    const { queryAllByTestId } = render(<StartsRate rate={3} />)
    expect(queryAllByTestId('stars-not-filled')).toHaveLength(2)
  })
})