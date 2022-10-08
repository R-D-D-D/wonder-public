import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { save } from '../securestore'

export interface UserState {
  email: string
  givenName: string
  familyName: string
  pictureUrl?: string
}

const initialState: UserState | null = null

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserState | null,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      if (action.payload?.email) {
        save('user', action.payload.email)
      }
      return action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
