export const compareValues = (a, b, field) => {
  const aValue = a[field.key]
  const bValue = b[field.key]

  let comparison = 0

  if (field.type === 'date') {
    comparison = new Date(aValue) - new Date(bValue)
  } else if (field.type === 'number') {
    comparison = aValue - bValue
  } else {
    comparison = String(aValue).localeCompare(String(bValue))
  }

  return field.order === 'desc' ? -comparison : comparison
}

export const formatDateTime = (datetime) => {
  try {
    const dateString = new Date(datetime).toLocaleString('en-AU', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })

    return dateString.toUpperCase()
  } catch (err) {
    console.log('Invalid string or error', err)
    return ''
  }
}
