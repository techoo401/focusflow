import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Tasks from "./pages/Tasks"
import Habits from "./pages/Habits"
import FocusTimer from "./pages/FocusTimer"

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/habits" element={<Habits />} />
      <Route path="/focus-timer" element={<FocusTimer />} />
    </Routes>
  )
}

export default App