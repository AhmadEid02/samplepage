import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './comp/NavBar'
import Footer from './comp/Footer'
import Home from './comp/Home'
import Features from './comp/Features'
import Support from './comp/Support'
import Enterprise from './comp/Enterprise'

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="support" element={<Support />} />
          <Route path="enterprise" element={<Enterprise />} />
        </Routes>
        <Footer />
      </Router>


    </>
  )
}

export default App
