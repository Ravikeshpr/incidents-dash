import React from 'react'
import './IncidentList.css'
import { priorityMap, ARIA_TEXT } from '../../../constants/constants'
import { formatDateTime } from '../../../utils/helperFunctions'

const IncidentList = ({ incidents }) => {
  return (
    <div
      className="incident-list"
      role="list"
      aria-label={ARIA_TEXT.incidentList}
    >
      {incidents.map((incident) => (
        <article
          key={incident.id}
          className="incident-card"
          role="listitem"
          aria-label={ARIA_TEXT.incidentDetails(
            incident.name,
            priorityMap[incident.priority].label,
            incident.locationName,
            formatDateTime(incident.datetime),
          )}
        >
          <div className="incident-icon" aria-hidden="true">
            <img
              src={priorityMap[incident.priority].icon}
              alt={
                ARIA_TEXT.priorityIconAlt[
                  priorityMap[incident.priority].label.toLowerCase()
                ]
              }
              className="priority-icon"
            />
          </div>
          <div className="incident-body">
            <div className="incident-field">
              {formatDateTime(incident.datetime)}
            </div>
            <div className="incident-field">{incident.name}</div>
            <div className="incident-field">{incident.locationName}</div>
            <div className="incident-field">
              {priorityMap[incident.priority].label}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default IncidentList
