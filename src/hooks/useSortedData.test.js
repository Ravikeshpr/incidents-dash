import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import useSortedData from './useSortedData'

describe('useSortedData', () => {
  const mockData = [
    {
      name: 'Liquid Spill',
      id: 1,
      priority: 2,
      datetime: '2018-01-21T22:54:12.000Z',
      locationId: 'airport/t1/lobby',
    },
    {
      name: 'Lost Property',
      id: 2,
      priority: 1,
      datetime: '2018-01-23T18:25:43.511Z',
      locationId: 'airport/t1/lobby',
    },
    {
      name: 'Unattended Baggage',
      id: 3,
      priority: 1,
      datetime: '2018-01-22T07:13:00.000Z',
      locationId: 'airport/t1',
    },
    {
      name: 'Theft',
      id: 4,
      priority: 3,
      datetime: '2018-01-22T01:04:24.000Z',
      locationId: 'airport/t2',
    },
  ]

  it('returns empty array for invalid data', () => {
    const { result } = renderHook(() =>
      useSortedData(
        null,
        { key: 'priority', order: 'asc', type: 'number' },
        null,
      ),
    )

    expect(result.current).toEqual([])
  })

  it('returns original data when no primary field provided', () => {
    const { result } = renderHook(() => useSortedData(mockData, null, null))

    expect(result.current).toEqual(mockData)
  })

  it('sorts by primary and secondary fields', () => {
    const { result } = renderHook(() =>
      useSortedData(
        mockData,
        { key: 'priority', order: 'asc', type: 'number' },
        { key: 'datetime', order: 'desc', type: 'date' },
      ),
    )

    expect(result.current[0].priority).toBe(1)
    expect(result.current[0].id).toBe(2)
    expect(result.current[1].priority).toBe(1)
    expect(result.current[1].id).toBe(3)
  })
})
