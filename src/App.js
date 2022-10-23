import { BrowserRouter, Routes, Route} from "react-router-dom"
import EndOfGamePage from "./pages/EndOfGamePage"
import GamePage from "./pages/GamePage"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element= {<Home/>}/>
        <Route path = "/games" element= {<GamePage/>}/>
        <Route path = "/end" element= {<EndOfGamePage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App