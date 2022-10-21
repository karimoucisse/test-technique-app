import { createSlice } from "@reduxjs/toolkit"

const testSlice = createSlice({
    name: "test",
    initialState: {
        level: 1,
        javascriptTests: [],
        currentTest: [],
        time: " ",
    },
    reducers: {
        gameLaunch: (state, action) => {
            state.javascriptTests = action.payload
            const test = state.javascriptTests.find(test => (
                test.id === 1
            ))
            state.currentTest = test
        },
        timeUpdate: (state, action) => {
            state.time = action.payload
        },
        levelUpdate: (state, action) => {
            state.level += 1
            const test = state.javascriptTests.find(test =>(
                test.id === state.level
            ))
            state.currentTest = test
        },
        EndOfGame: (state, action) => {

        }
    }
})

export const {
    gameLaunch,
    timeUpdate,
    levelUpdate,
    EndOfGame
} = testSlice.actions

export default testSlice.reducer