import { MediaList } from "../mediaList/MediaList.jsx"
import { useState, useEffect, useParams } from "react"
import { firestoreFetch } from "../../fetch/firestoreFetch.js"

export const MediaListContainer = () => {
    const [data, setData] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [idCategory])

    return (
        <MediaList media={data}/>
    )
}