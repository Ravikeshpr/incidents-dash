import React from 'react'
import './IncidentTable.css'
import { priorityMap } from '../../../constants/constants'
import { formatDateTime } from '../../../utils/helperFunctions'

const IncidentTable = ({ incidents }) => {
  return (
    <div className="incident-table-wrapper">
      <table className="incident-table">
        <thead>
          <tr>
            <th></th>
            <th>Incident Name</th>
            <th>Date and Time</th>
            <th>Priority</th>
            <th>Location Name</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td className="icon-cell">
                <img
                  src={priorityMap[incident.priority].icon}
                  alt={priorityMap[incident.priority].label}
                  className="priority-icon"
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
