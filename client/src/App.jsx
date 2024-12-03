import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
