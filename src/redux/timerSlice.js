import { createSlice } from "@reduxjs/toolkit"

const timerSlice = createSlice({
    name: "timer",
    initialState: {
        timer: "",
        timeOn: false,
    },
    reducers:  {
        starTimer: (state, action) => {
            state.timeOn = true
        },
        updateTimer: (state, action) => {
            state.timer = action.payload
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

