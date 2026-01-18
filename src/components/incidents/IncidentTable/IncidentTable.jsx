import React from 'react'
import './IncidentTable.css'
import { priorityMap, ARIA_TEXT } from '../../../constants/constants'
import { formatDateTime } from '../../../utils/helperFunctions'

const IncidentTable = ({ incidents }) => {
  return (
    <div className="incident-table-wrapper">
      <table className="incident-table" aria-label={ARIA_TEXT.incidentTable}>
        <caption className="sr-only">{ARIA_TEXT.tableCaption}</caption>
        <thead>
          <tr>
            <th scope="col">
              <span className="sr-only">Priority Icon</span>
            </th>
            <th scope="col">Incident Name</th>
            <th scope="col">Date and Time</th>
            <th scope="col">Priority</th>
            <th scope="col">Location Name</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td className="icon-cell">
                <img
                  src={priorityMap[incident.priority].icon}
                  alt={
                    ARIA_TEXT.priorityIconAlt[
                      priorityMap[incident.priority].label.toLowerCase()
                    ]
                  }
                  className="priority-icon"
                  aria-hidden="false"
                />
              </td>
              <td>{incident.name}</td>
              <td>{formatDateTime(incident.datetime)}</td>
              <td>{priorityMap[incident.priority].label}</td>
              <td>{incident.locationName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IncidentTable
