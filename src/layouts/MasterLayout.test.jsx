import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MasterLayout from './MasterLayout'

describe('MasterLayout', () => {
  it('renders header and children', () => {
    render(
      <MasterLayout>
        <div>Test Content</div>
      </MasterLayout>,
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
