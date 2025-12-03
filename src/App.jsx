import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'


function App() {


  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-green-800 text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">🌽 Farm Connect Ghana</h1>
            <div className="space-x-6">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/signup" className="hover:underline">Sign Up</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          {/* <Route path="/login" element={<Login />}/> */}
        </Routes>
      </div>
    </>
  )
}

export default App
