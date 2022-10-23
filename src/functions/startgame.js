import { javascriptTests } from "../javascriptTests"
import { gameLaunch } from "../redux/testSlice"
import { starTimer } from "../redux/timerSlice"
import { useDispatch } from "react-redux"

export const startGame = (dispatch) => {
    const tests = javascriptTests
    dispatch(gameLaunch(tests))
    dispatch(starTimer())  //run timer
}