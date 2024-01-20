import React, { ReactNode } from 'react'
import {render} from '@testing-library/react'
import { Providers } from '../providers'

const AllTheProviders = ({children }:{ children : ReactNode}) => {
  return (
    <Providers>
      { children }
    </Providers>
  )
}

const customRender = (children: React.ReactElement) =>
  render(<AllTheProviders>{ children }</AllTheProviders>)

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}