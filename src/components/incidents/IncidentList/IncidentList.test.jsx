import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import IncidentList from './IncidentList'

describe('IncidentList', () => {
  const mockIncidents = [
    {
      id: 1,
      name: 'Fire',
      datetime: '2018-01-22T11:25:18.000Z',
      priority: 1,
      locationName: 'T1 Lobby',
    },
    {
      id: 2,
      name: 'Theft',
      datetime: '2018-01-22T01:04:24.000Z',
      priority: 2,
      locationName: 'T2',
    },
  ]

  it('renders list with incidents', () => {
    render(<IncidentList incidents={mockIncidents} />)
    expect(screen.getByText('Fire')).toBeInTheDocument()
    expect(screen.getByText('Theft')).toBeInTheDocument()
    expect(screen.getByText('T1 Lobby')).toBeInTheDocument()
  })

  it('displays priority labels correctly', () => {
    render(<IncidentList incidents={mockIncidents} />)
    expect(screen.queryByText('High')).toBeInTheDocument()
    expect(screen.queryByText('Medium')).toBeInTheDocument()
    expect(screen.queryByText('Low')).not.toBeInTheDocument()
  })
})
