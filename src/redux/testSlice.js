import { createSlice } from "@reduxjs/toolkit"

const testSlice = createSlice({
    name: "test",
    initialState: {
        level: 1,
        maxLevel : 0,
        result: false,
        javascriptTests: [],
        currentTest: [],
        consoleResult: [],
        codeEditorValue: " ",
    },
    reducers: {
        gameLaunch: (state, action) => {
            state.javascriptTests = action.payload

            const test = state.javascriptTests.find(test => (
                test.id === 1
            ))
            state.currentTest = test

            state.maxLevel = state.javascriptTests.length 
        },
        beforeTest: (state) => {
            state.consoleResult = []
            state.testResults = []
            state.result = false
        },
        runTest: (state, action) => {
            state.consoleResult.push(action.payload.message);
        },
        updateResult: (state, action) => {
            state.result = action.payload
        },
        updateCodeEditorValue: (state, action) => {
            state.codeEditorValue = action.payload
        },
        timeUpdate: (state, action) => {
            state.time = action.payload
        },
        levelUpdate: (state)  => {
            state.level += 1
            const test = state.javascriptTests.find(test =>(
                test.id === state.level
            ))
            state.currentTest = test
        },
        EndOfGame: (state) => {
            state.result = true
        }
    }
})

export const {
    gameLaunch,
    beforeTest,
    runTest,
    updateResult,
    updateCodeEditorValue,
    timeUpdate,
    levelUpdate,
    EndOfGame
} = testSlice.actions

export default testSlice.reducer