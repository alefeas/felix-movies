import { MediaListSlider } from "../../components/mediaListSlider/MediaListSlider.jsx"
import { useEffect, useState } from "react"
import { firestoreFetch } from "../../fetch/firestoreFetch.js"
import { Loader } from "../../components/loader/Loader.jsx"

export const Home = () => {
    const [dataSlider, setDataSlider] = useState([])

    useEffect(() => {
        firestoreFetch()
            .then(res => setDataSlider(res))
            .catch(err => console.log(err))
    }, [])

    const weeklyRecommendation = dataSlider.find(media => media.weeklyRecommendation === true)

    return (
        <div>
            {
            dataSlider.length > 0 ?    
            <div>
                <div className="homeCoverImageContainer">
                    <img src={weeklyRecommendation.coverImage} alt="Avatar: The Way of Water" />
                </div>
                <div className="mediaListSliderContainer">
                    <div>
                        <h3>MOST LIKED</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.percentageOfLikes >= 89)}/>
                    </div>
                    <div>
                        <h3>NEW RELEASES</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.releaseYear >= 2022)}/>
                    </div>
                    <div>
                        <h3>ANIMATED</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.category === "animated")}/>
                    </div>
                    <div>
                        <h3>OLD RELEASES</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.releaseYear <= 2006 )}/>
                    </div>
                </div>
            </div>
            : 
            <div>
                <Loader/>    
            </div>
            }
        </div>
    )
}