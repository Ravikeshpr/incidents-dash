import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import IncidentsDashboard from './IncidentsDashboard'
import incidentsReducer from '../store/incidentsSlice'

const createMockStore = (initialState) => {
  return configureStore({
    reducer: {
      incidents: incidentsReducer,
    },
    preloadedState: {
      incidents: initialState,
    },
  })
}

describe('IncidentsDashboard', () => {
  it('renders loading state', () => {
    const store = createMockStore({
      data: [],
      loading: true,
      error: null,
    })

    render(
      <Provider store={store}>
        <IncidentsDashboard />
      </Provider>,
    )

    expect(screen.getByText('Loading incidents...')).toBeTruthy()
  })

  it('renders incidents dashboard with data', async () => {
    const mockIncidents = [
      {
        name: 'Liquid Spill',
        id: 1,
        priority: 3,
        datetime: '2018-01-21T22:54:12.000Z',
        locationId: 'airport/t1/lobby',
      },
    ]

    const store = createMockStore({
      data: mockIncidents,
      loading: false,
      error: null,
    })

    render(
      <Provider store={store}>
        <IncidentsDashboard />
      </Provider>,
    )

    const elements = await screen.findAllByText(/Liquid Spill/)
    expect(elements.length).toBeGreaterThan(0)
  })
})
