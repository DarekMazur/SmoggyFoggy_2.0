import { configureStore, createSlice } from '@reduxjs/toolkit'

const mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)')
const isDarkMode = mediaQueryObj.matches

const initialMode = isDarkMode ? 'dark' : 'light'

const modeSlice = createSlice({
  name: 'mode',
  initialState: initialMode,
  reducers: {
    setMode(_state, action) {
      return action.payload
    },
  },
})

export const { setMode } = modeSlice.actions

export const store = configureStore({
  reducer: {
    popup: modeSlice.reducer,
  },
})
