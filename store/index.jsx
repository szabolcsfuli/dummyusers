import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const dummyDbSlice = createSlice({
  name: 'dummyDB',
  initialState: {
    users: [],
    user: {},
    albums: [],
    posts: [],
    photos: []
  },
  reducers: {
    populateUsers: (state, action) => {
      state.users = action.payload
    },
    setUser: (state, action) => {
      const user = state.users.find(item => item.id === action.payload)
      state.user = { ...user }
    },
    populatePosts: (state, action) => {
      state.posts = action.payload
    },
    populateAlbums: (state, action) => {
      state.albums = action.payload
    },
    populatePhotos: (state, action) => {
      state.photos = action.payload
    },
  }
})

export default configureStore({
  reducer: {
    dummyDB: dummyDbSlice.reducer
  }
})

export const { populateUsers, populatePosts, setUser, populateAlbums, populatePhotos } = dummyDbSlice.actions
