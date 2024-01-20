import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { AvaliateBook } from '../avaliate-book'

describe('<AvaliateBook />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(
      <AvaliateBook
        autor='lorem'
        avarageRate={3}
        category={['action']}
        coverUrl='/public/images/books/clean-code.jpg'
        name='lorem-name'
        totalAvaliations={3}
        totalPages={160}
      />)
    expect(container).toBeInTheDocument()
  })

  it('should be to render with correct atributes at image', async () => {
    const { getByRole } = render(
    <AvaliateBook
      autor='lorem'
      avarageRate={3}
      category={['action']}
      coverUrl='/public/images/books/clean-code.jpg'
      name='lorem-name'
      totalAvaliations={3}
      totalPages={160}
    />)
    await waitFor(() => {
      const img = getByRole('img')
      expect(img).toHaveAttribute('src')
    })
  })

  it('should be to render with correct atributes at autor', async () => {
    const { findByText } = render(
    <AvaliateBook
      autor='lorem'
      avarageRate={3}
      category={['action']}
      coverUrl='/public/images/books/clean-code.jpg'
      name='lorem-name'
      totalAvaliations={3}
      totalPages={160}
    />)
    await waitFor(() => {
      expect(findByText('lorem')).not.toBeNull()
    })
  })

  it('should be to render with correct atributes at category', async () => {
    const { findByText } = render(
    <AvaliateBook
      autor='lorem'
      avarageRate={3}
      category={['action']}
      coverUrl='/public/images/books/clean-code.jpg'
      name='lorem-name'
      totalAvaliations={3}
      totalPages={160}
    />)
    await waitFor(() => {
      expect(findByText('action')).not.toBeNull()
    })
  })

  it('should be to render with correct atributes at total pages', async () => {
    const { findByText } = render(
    <AvaliateBook
      autor='lorem'
      avarageRate={3}
      category={['action']}
      coverUrl='/public/images/books/clean-code.jpg'
      name='lorem-name'
      totalAvaliations={3}
      totalPages={160}
    />)
    await waitFor(() => {
      expect(findByText('160')).not.toBeNull()
    })
  })

  it('should be to render with correct atributes at total avaliations', async () => {
    const { findByText } = render(
    <AvaliateBook
      autor='lorem'
      avarageRate={5}
      category={['action']}
      coverUrl='/public/images/books/clean-code.jpg'
      name='lorem-name'
      totalAvaliations={3}
      totalPages={160}
    />)
    await waitFor(() => {
      expect(findByText('3')).not.toBeNull()
    })
  })

  it('should be to render with correct atributes at name', async () => {
    const { findByText } = render(
    <AvaliateBook
      autor='lorem'
      avarageRate={5}
      category={['action']}
      coverUrl='/public/images/books/clean-code.jpg'
      name='lorem-name'
      totalAvaliations={3}
      totalPages={160}
    />)
    await waitFor(() => {
      expect(findByText('lorem-name')).not.toBeNull()
    })
  })
})