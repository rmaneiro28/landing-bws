import { BrowserRouter as Router, Route, Routes } from "react-router"
import { Main } from "./components/Main"
import { CoverParticles } from "./components/CoverParticles"
const App = () => {
  return (
    <Router>
      <CoverParticles />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App;