import '@testing-library/jest-dom'
import { AsideBar } from '../aside-bar'
import { render, waitFor } from '@testing-library/react'

describe('<AsideBar />', () => {
  
  it('should be to render correctly', async () => {
    const { container } = render(<AsideBar />)
      expect(container).toBeInTheDocument()
  })

  it('should be to render to popular books', async () => {
    const { getByTestId } = render(<AsideBar />)
    await waitFor(() => {
      expect(getByTestId('book-shelf')).toBeInTheDocument()
    })
  })
})