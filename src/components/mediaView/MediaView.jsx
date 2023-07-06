import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetchItem } from "../../fetch/firestoreFetch.js";
import { Loader } from '../loader/Loader.jsx'
import { Link } from "react-router-dom";

export const MediaView = () => {
    const [data, setData] = useState({})
    const { idItem } = useParams()

    useEffect(() => {
        firestoreFetchItem(idItem)
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <>
        {
            data.video ?
            <>
                <Link to={`/`} className="exitMovie">Go back</Link>
                <video autoPlay controls poster={data.coverImage} src={data.video}></video>
            </>
            : <Loader/>
        }
        </>
    )
}