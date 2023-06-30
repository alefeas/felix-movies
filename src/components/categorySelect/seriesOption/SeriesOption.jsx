import { MenuItem } from "@mui/material"
import { Link } from "react-router-dom"

export const SeriesOption = () => {
    return (
        <>
        <Link to={`/series`}><MenuItem value={'all-series'}>All series</MenuItem></Link>
        <Link to={`/series/animated`}><MenuItem value={'animated'}>Animated</MenuItem></Link>
        <Link to={`/series/documentary`}><MenuItem value={'documentary'}>Documentary</MenuItem></Link>
        <Link to={`/series/comedy`}><MenuItem value={'comedy'}>Comedy</MenuItem></Link>
        <Link to={`/series/drama`}><MenuItem value={'drama'}>Drama</MenuItem></Link>
        </>
    )
}