import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import { Header } from "./layouts"

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  )
}

export default App
