//import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
