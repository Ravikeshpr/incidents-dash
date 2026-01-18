import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIncidents } from '../store/incidentsSlice'
import useSortedData from '../hooks/useSortedData'
import './IncidentsDashboard.css'

const IncidentsDashboard = () => {
  const dispatch = useDispatch()
  const {
    data: incidents,
    loading,
    error,
  } = useSelector((state) => state.incidents)

  // Sort incidents by priority and datetime
  const sortedIncidents = useSortedData(
    incidents,
    { key: 'priority', order: 'asc', type: 'number' },
    { key: 'datetime', order: 'desc', type: 'date' },
  )

  useEffect(() => {
    dispatch(fetchIncidents())
  }, [dispatch])

  if (loading) {
    return <div className="loading">Loading incidents...</div>
  }

  if (error) {
    return <div className="error">Error: {error}</div>
  }

  return (
    <div className="incidents-dashboard">
      <output>{JSON.stringify(sortedIncidents)}</output>
    </div>
  )
}

export default IncidentsDashboard
