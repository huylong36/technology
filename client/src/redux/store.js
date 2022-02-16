import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../components/header/auth/authSlice'
const rootReducers = {
    user : userReducer,
}
const store = configureStore({
    reducer: rootReducers,
})
export default store;