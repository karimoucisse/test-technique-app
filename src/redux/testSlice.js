import { createSlice } from "@reduxjs/toolkit"

const testSlice = createSlice({
    name: "test",
    initialState: {
        level: 1,
        javascriptTests: [],
        currentTest: [],
        time: " ",
        consoleMessage: [],
        testResults: [],
        finalResult: " "
    },
    reducers: {
        gameLaunch: (state, action) => {
            state.javascriptTests = action.payload
            const test = state.javascriptTests.find(test => (
                test.id === 1
            ))
            state.currentTest = test
        },
        beforeTest: (state) => {
            state.consoleMessage = []
            state.testResults = []
        },
        runTest: (state, action) => {
            state.consoleMessage.push(action.payload.message);
            state.testResults.push(action.payload.results)
            const findResult = state.testResults.includes(false)
            if(findResult) {
                state.finalResult = false
            }else {
                state.finalResult = true
            }
        },
        timeUpdate: (state, action) => {
            state.time = action.payload
        },
        levelUpdate: (state) => {
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
    beforeTest,
    runTest,
    timeUpdate,
    levelUpdate,
    EndOfGame
} = testSlice.actions

export default testSlice.reducer