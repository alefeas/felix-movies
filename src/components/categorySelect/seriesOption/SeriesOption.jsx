import { MenuItem } from "@mui/material"
import { Link } from "react-router-dom"

export const SeriesOption = () => {
    return (
        <>
        <Link to={`/series`}><MenuItem value={'all-series'}>All series</MenuItem></Link>
        <Link to={`/series/animated`}><MenuItem value={'animated'}>Animated</MenuItem></Link>
        <Link to={`/series/documentary`}><MenuItem value={'documentary'}>Documentary</MenuItem></Link>
        <Link to={`/series/fantasy`}><MenuItem value={'fantasy'}>Fantasy</MenuItem></Link>
        <Link to={`/series/comedy`}><MenuItem value={'Comedy'}>Comedy</MenuItem></Link>
        <Link to={`/series/science-fiction`}><MenuItem value={'science-fiction'}>Science fiction</MenuItem></Link>
        <Link to={`/series/super-heros`}><MenuItem value={'super-heros'}>Super heros</MenuItem></Link>
        </>
    )
}