/**
 * @jest-environment jsdom
 */

// testEnvironment can be set at test file level with a codeblock at line 1
// or globally in jest config (jest default is node)

import { render, screen } from '@testing-library/react'
import App from '../pages/index'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: 'Welcome to Next.js!' })
    ).toBeInTheDocument()
  })
})
