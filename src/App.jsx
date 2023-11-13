import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Index from './components/user/Index.jsx'
import Create from './components/user/Create.jsx'
import Details from './components/user/Details.jsx' 
import Edit from './components/user/Edit.jsx'
import UserNotfound from './components/user/UserNotfound.jsx'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />}/>
      <Route path='/user/index' element={<Index />} />
      <Route path='/user/:id' element={<Details />} />
      <Route path='/user/edit/:id' element={<Edit />} />
      <Route path='/user/create' element={<Create />} />
      <Route path='*' element={<UserNotfound />} />

    </Routes>
  )
}

export default App