import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '..src/app/page'
 
// a very basic temporary file before the real tests get going.
// i wanted to do this early because setting up tests with older projects can apperantly be painfull.

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})