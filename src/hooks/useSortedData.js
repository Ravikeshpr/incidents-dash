import { useMemo } from 'react'
import { compareValues } from '../utils/helperFunctions'

// Custom hook for sorting data by primary and secondary fields
// data - Array of objects to sort
// primaryField - { key: string, order: 'asc', type: "date,number etc"}
// secondaryField - { key: string, order: 'desc', type: "date,number etc"}
// Returns Sorted array

// It can be argued that this hook is unnecessary as this can be done in reducer itself
// just added this to show the knowledge of custom hook
const useSortedData = (data, primaryField, secondaryField) => {
  return useMemo(() => {
    if (!data || !Array.isArray(data)) return []
    if (!primaryField) return data

    const sortedData = [...data]

    return sortedData.sort((a, b) => {
      const primaryComparison = compareValues(a, b, primaryField)

      if (primaryComparison === 0 && secondaryField) {
        return compareValues(a, b, secondaryField)
      }

      return primaryComparison
    })
  }, [data, primaryField, secondaryField])
}

export default useSortedData
