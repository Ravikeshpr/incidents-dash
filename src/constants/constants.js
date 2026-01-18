import highPriorityIcon from '../assets/alarm-high.svg'
import mediumPriorityIcon from '../assets/alarm-medium.svg'
import lowPriorityIcon from '../assets/alarm-low.svg'

export const priorityMap = {
  1: { label: 'High', icon: highPriorityIcon },
  2: { label: 'Medium', icon: mediumPriorityIcon },
  3: { label: 'Low', icon: lowPriorityIcon },
}

export const ARIA_TEXT = {
  priorityIconAlt: {
    high: 'High priority incident',
    medium: 'Medium priority incident',
    low: 'Low priority incident',
  },
  incidentTable: 'Incidents table view',
  incidentList: 'Incidents list view',
  incidentCard: 'Incident details card',
  mainNavigation: 'Main navigation',
  skipToContent: 'Skip to main content',
  loadingIncidents: 'Loading incidents...',
  errorLoadingIncidents: 'Error loading incidents',
  tableCaption: 'List of all incidents sorted by priority and time',
  incidentDetails: (name, priority, location, datetime) =>
    `${name} incident, ${priority} priority, at ${location}, occurred on ${datetime}`,
}
