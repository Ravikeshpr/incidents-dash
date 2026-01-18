import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIncidents } from '../store/incidentsSlice'

const IncidentsDashboard = () => {
  const dispatch = useDispatch()
  const {
    data: incidents,
    loading,
    error,
  } = useSelector((state) => state.incidents)

  useEffect(() => {
    dispatch(fetchIncidents())
  }, [dispatch])

  if (loading) {
    return <div>Loading incidents...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <code>{JSON.stringify(incidents)}</code>
    </div>
  )
}

export default IncidentsDashboard
