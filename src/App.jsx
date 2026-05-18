import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"

import Products from "./pages/Products"
import Receipes from "./pages/Receipes"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/products" element={<Products />} />
        <Route path="/receipes" element={<Receipes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
