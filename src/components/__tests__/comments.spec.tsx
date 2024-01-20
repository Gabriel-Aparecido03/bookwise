import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Bookshelf } from '../book-shelf'
import { Comments } from '../comments'

describe('<Comments />', () => {

  it('should be to render correctly', async () => {
    const { container } = render(
      <Comments
        description='description'
        makedAt={new Date()}
        rate={3}
        userCoverUrl='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        userName='user-name'
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('should be to render correctly description attribute', async () => {
    const { getByText } = render(
      <Comments
        description='description'
        makedAt={new Date()}
        rate={3}
        userCoverUrl='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        userName='user-name'
      />
    )
    expect(getByText('description')).not.toBeNull()
  })

  it('should be to render correctly makedAt attribute', async () => {
    const makedAt = new Date() // because of dayjs lib
    const { getByText } = render(
      <Comments
        description='description'
        makedAt={makedAt}
        rate={3}
        userCoverUrl='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        userName='user-name'
      />
    )
    expect(getByText('a few seconds')).not.toBeNull()
  })

  it('should be to render correctly image attribute', async () => {
    const { getByRole } = render(
      <Comments
        description='description'
        makedAt={new Date()}
        rate={3}
        userCoverUrl='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        userName='user-name'
      />
    )
    expect(getByRole('img')).not.toBeNull()
  })
})