import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../components/header/auth/authSlice'
import blogReducer from '../components/newsfeed/blogSlice'
const rootReducers = {
    user : userReducer,
    blog : blogReducer,
}
const store = configureStore({
    reducer: rootReducers,
})
export default store;