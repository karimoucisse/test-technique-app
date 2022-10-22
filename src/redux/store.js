import { configureStore } from "@reduxjs/toolkit"
import testReducer from "./testSlice"
import timerReducer from './timerSlice'

export default configureStore({
    reducer: {
        tests : testReducer,
        timer : timerReducer,
        
    }
})