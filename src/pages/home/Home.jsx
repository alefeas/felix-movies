import { MediaListSlider } from "../../components/mediaListSlider/MediaListSlider.jsx"
import { useEffect, useState } from "react"
import { firestoreFetchCategory } from "../../fetch/firestoreFetch.js"
import { Loader } from "../../components/loader/Loader.jsx"
    
export const Home = () => {
    const [dataSlider, setDataSlider] = useState([])

    useEffect(() => {
        firestoreFetchCategory()
            .then(res => setDataSlider(res))
            .catch(err => console.log(err))
    }, [])

    const weeklyRecommendation = dataSlider.find(media => media.weeklyRecommendation === true)

    const dateNewsReleases = '2022-11-22'
    const dateOldReleases = '2006-11-22'
    const dateNews = new Date(dateNewsReleases)
    const dateOlds = new Date(dateOldReleases)
    const timestampNews = Math.floor(dateNews.getTime() / 1000)
    const timestampOlds = Math.floor(dateOlds.getTime() / 1000)

    

    return (
        <div>
            {
            dataSlider.length > 0 ?    
            <div>
                <div className="homeCoverImageContainer">
                    <img src={weeklyRecommendation.coverImage} alt={weeklyRecommendation.title} />
                </div>
                <div className="mediaListSliderContainer">
                    <div>
                        <h3>MOST LIKED</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.percentageOfLikes >= 89)}/>
                    </div>
                    <div>
                        <h3>NEW RELEASES</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.releaseTimestamp > timestampNews)}/>
                    </div>
                    <div>
                        <h3>ANIMATED</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.category === "animated")}/>
                    </div>
                    <div>
                        <h3>OLD RELEASES</h3>
                        <MediaListSlider media={dataSlider.filter(media => media.releaseTimestamp < timestampOlds)}/>
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