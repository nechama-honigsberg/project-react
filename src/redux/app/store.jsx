
import { configureStore} from '@reduxjs/toolkit'
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import itemSlice from '../itemSlice'
import addItemMiddleware from '../middleware/item.crud'

export const store = configureStore({
  reducer: {
    myItem: itemSlice,
  },
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), addItemMiddleware],
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(addItemMiddleware),
  // other store configuration options...
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
