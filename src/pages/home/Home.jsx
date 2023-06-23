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
                <div>
                    <video className="homeTrailer" src={weeklyRecommendation.trailer} controls autoPlay></video>
                </div>
                <div className="mediaListSliderContainer">
                    <div>
                        <h3>MOST LIKED</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.percentageOfLikes >= 88)}/>
                    </div>
                    <div>
                        <h3>NEW MOVIES</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.releaseYear >= 2022)}/>
                    </div>
                    <div>
                        <h3>OLD MOVIES</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.releaseYear <= 2006)}/>
                    </div>
                    <div>
                        <h3>ANIMATED MOVIES</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.category === "animated")}/>
                    </div>
                </div>
            </div>
            : 
            <div>
                <span>Loading...</span>    
                <Loader/>    
            </div>
            }
        </div>
    )
}