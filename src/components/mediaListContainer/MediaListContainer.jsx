import { useEffect } from "react"
import { db } from "../../config/firebase.js"
import { getDocs, collection } from "firebase/firestore"
import { useState } from "react"
import { MediaList } from "./mediaList/MediaList.jsx"

export const MediaListContainer = () => {
    const [mediaList, setMediaList] = useState([])

    const mediaCollectionRef = collection(db, "media")

    const getMediaList = async () => {
        try {
            const data = await getDocs(mediaCollectionRef)
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(), 
                id: doc.id
            }))
            setMediaList(filteredData)
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        getMediaList()
    }, [])
    
    return (
        <>
            <MediaList media={mediaList}/>
        </>
    )
}