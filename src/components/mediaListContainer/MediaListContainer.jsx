import { useEffect } from "react"
import { db } from "../../config/firebase.js"
import { getDocs, collection } from "firebase/firestore"
import { useState } from "react"
import { MediaListSlider } from "./mediaListSlider/MediaListSlider.jsx"

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
    console.log(mediaList)
    useEffect(() => {
        getMediaList()
    })
    
    return (
        <div className="mediaListContainer">
            <div>
                <h3>MOST LIKED</h3>
                <MediaListSlider media={mediaList.filter(media => media.percentageOfLikes >= 88)}/>
            </div>
            <div>
                <h3>NEW MOVIES</h3>
                <MediaListSlider media={mediaList.filter(media => media.releaseYear > 2020)}/>
            </div>
            <div>
                <h3>OLD MOVIES</h3>
                <MediaListSlider media={mediaList.filter(media => media.releaseYear <= 2006)}/>
            </div>
            <div>
                <h3>ANIMATED MOVIES</h3>
                <MediaListSlider media={mediaList.filter(media => media.category === "animated")}/>
            </div>
        </div>
    )
}