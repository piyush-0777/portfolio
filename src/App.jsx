import { useState , useEffect } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Project from './componets/Project'
import Home from './componets/Home'
import About from './componets/About'
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"
import Contact  from './componets/Contact'

function App() {
  const [paje , setPaje] = useState('home');
    
  
  return (

    <main  className=' md:overflow-hidden'>
      <Router>
      <Navbar paje={paje} setPaje={setPaje} />
      <Routes>
        <Route path='/' element={<Home setPaje={setPaje} />} />
        <Route path='/project' element={<Project/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
      </Router>    
      </main>
  )
}

export default App
