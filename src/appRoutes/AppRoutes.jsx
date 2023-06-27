import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/Home.jsx"
import { Movies } from "../pages/movies/Movies.jsx"
import { Series } from "../pages/series/Series.jsx"
import { NotFound } from "../pages/notFound/NotFound.jsx"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/movies/:idCategory' element={<Movies/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/series/:idCategory' element={<Series/>}/>
            <Route path='/my-list' element={<Series/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
    )
}