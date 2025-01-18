import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import CardsPage from './components/CardsPage'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardsPage" element={<CardsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
