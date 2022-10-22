import { createSlice } from "@reduxjs/toolkit"

const testSlice = createSlice({
    name: "test",
    initialState: {
        level: 1,
        maxLevel : 0,
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

            state.maxLevel = state.javascriptTests.length -1
        },
        beforeTest: (state) => {
            state.consoleResult = []
            state.testResults = []
        },
        runTest: (state, action) => {
            state.consoleResult.push(action.payload.message);
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
        EndOfGame: (state, action) => {

        }
    }
})

export const {
    gameLaunch,
    beforeTest,
    runTest,
    updateCodeEditorValue,
    timeUpdate,
    levelUpdate,
    EndOfGame
} = testSlice.actions

export default testSlice.reducer