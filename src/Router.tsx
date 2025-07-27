import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { HomeData } from './pages/HomeData'
import { HomeFront } from './pages/HomeFront'

export function Router () {
  return (
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/data' element={<HomeData />} />
            <Route path='/frontend' element={<HomeFront />} />
        </Routes>
  )
}
