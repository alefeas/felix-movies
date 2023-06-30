import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { firestoreFetchCategory } from "../../fetch/firestoreFetch.js"
import { MediaList } from "../../components/mediaList/MediaList.jsx"
import { Loader } from "../../components/loader/Loader.jsx"
import { CategorySelect } from "../../components/categorySelect/CategorySelect.jsx"

export const Series = () => {
    const [data, setData] = useState([])
    const { idCategory } = useParams()
    
    useEffect(() => {
        firestoreFetchCategory(idCategory)
        .then(res => setData(res))
        .catch(err => console.log(err))
        if (idCategory !== undefined && idCategory !== 'animated' && idCategory !== 'drama' && idCategory !== 'comedy' && idCategory !== 'documentary') {
            window.history.replaceState(null, "New Page Title", "/404")
            window.location.reload()
        }
    }, [idCategory])

    return (
        <>
            {
                data.length > 0 ?
                <>
                    <h3>MOVIES</h3>
                    <CategorySelect media={data}/>
                    <MediaList media={data.filter(media => media.type === 'serie')}/>
                </>
                : <Loader/>
            }
        </>
    )   
}