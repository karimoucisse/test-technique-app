import { BrowserRouter, Routes, Route} from "react-router-dom"
import GamePage from "./pages/GamePage"
import Home from "./pages/Home"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element= {<Home/>}/>
        <Route path = "/games" element= {<GamePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App