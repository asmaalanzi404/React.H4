import Info from "./component/Info";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import { Routes,Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Info/>
    <Login/>
    <Routes><Route path='/Info' element={<Info/>}/>
    <Route path='/login' element={<Login/>}/></Routes>
    
  
  
    
    </>
  )
}

export default App
