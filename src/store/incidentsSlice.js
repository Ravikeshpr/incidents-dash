import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fakeAPI from '../fakeAPI/fakeAPI'

export const fetchIncidents = createAsyncThunk(
  'incidents/fetchIncidents',
  async () => {
    const locations = await fakeAPI.getLocations()
    const allIncidentsPromises = locations.map((location) =>
      fakeAPI.getIncidentsByLocationId(location.id),
    )
    const incidentsArrays = await Promise.all(allIncidentsPromises)

    // Flatten and combine with location names
    const incidentsWithLocations = []
    incidentsArrays.forEach((incidents, index) => {
      incidents.forEach((incident) => {
        incidentsWithLocations.push({
          ...incident,
          locationName: locations[index].name,
        })
      })
    })

    // Remove duplicates based on id
    const uniqueIncidents = Array.from(
      new Map(incidentsWithLocations.map((item) => [item.id, item])).values(),
    )

    return uniqueIncidents
  },
)

const incidentsSlice = createSlice({
  name: 'incidents',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncidents.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchIncidents.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchIncidents.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default incidentsSlice.reducer
