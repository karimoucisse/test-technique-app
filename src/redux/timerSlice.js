import { createSlice } from "@reduxjs/toolkit"

const timerSlice = createSlice({
    name: "timer",
    initialState: {
        time: "",
        timeOn: false,
    },
    reducers:  {
        starTimer: (state, action) => {
            state.timeOn = true
        },
        updateTimer: (state, action) => {
            state.time = action.payload
        },
        stopTimer: (state) => {
            state.timeOn = false
        },
    }
})

export const {
    starTimer,
    updateTimer,
    stopTimer,
} = timerSlice.actions

export default timerSlice.reducer

