import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { HomeData } from './pages/HomeData'

export function Router () {
  return (
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/data' element={<HomeData />} />
        </Routes>
  )
}
