import { configureStore, createSlice } from '@reduxjs/toolkit'

const isBrowser = typeof window !== 'undefined'

const mediaQueryObj = isBrowser
  ? window.matchMedia('(prefers-color-scheme: dark)')
  : null
const isDarkMode = mediaQueryObj ? mediaQueryObj.matches : false

// eslint-disable-next-line no-nested-ternary
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
    mode: modeSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
