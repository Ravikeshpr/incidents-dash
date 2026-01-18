import React from 'react'
import './IncidentList.css'
import { priorityMap } from '../../../constants/constants'
import { formatDateTime } from '../../../utils/helperFunctions'

const IncidentList = ({ incidents }) => {
  return (
    <div className="incident-list">
      {incidents.map((incident) => (
        <div key={incident.id} className="incident-card">
          <div className="incident-icon">
            <img
              src={priorityMap[incident.priority].icon}
              alt={priorityMap[incident.priority].label}
              className="priority-icon"
            />
          </div>
          <div className="incident-body">
            <span className="incident-field">
              {formatDateTime(incident.datetime)}
            </span>
            <div className="incident-field">{incident.name}</div>
            <div className="incident-field">{incident.locationName}</div>

            <div className="incident-field">
              {priorityMap[incident.priority].label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default IncidentList
