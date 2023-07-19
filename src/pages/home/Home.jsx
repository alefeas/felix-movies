import { MediaListSlider } from "../../components/mediaListSlider/MediaListSlider.jsx"
import { useEffect, useState } from "react"
import { firestoreFetchCategory } from "../../fetch/firestoreFetch.js"
import { Loader } from "../../components/loader/Loader.jsx"
import { Link } from "react-router-dom"
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
    
export const Home = () => {
    const [dataSlider, setDataSlider] = useState([])

    useEffect(() => {
        firestoreFetchCategory()
            .then(res => setDataSlider(res))
            .catch(err => console.log(err))
    }, [])

    const weeklyRecommendation = dataSlider.find(media => media.weeklyRecommendation === true)

    const dateNewsReleases = '2022-02-10'
    const dateOldReleases = '2008-01-01'
    const dateNews = new Date(dateNewsReleases)
    const dateOlds = new Date(dateOldReleases)
    const timestampNews = Math.floor(dateNews.getTime() / 1000)
    const timestampOlds = Math.floor(dateOlds.getTime() / 1000)

    return (
        <div>
            {
            dataSlider.length > 0 && weeklyRecommendation.homeCoverImage ?    
            <div>
                <div className="homeCoverImageContainer">
                    <div className='weeklyRecomendationInfoContainer'>
                        <h4>{weeklyRecommendation.title}</h4>
                        <span className='weeklyRecomendationSynopsis'>{weeklyRecommendation.synopsis}</span>
                        <Link to={`media/${weeklyRecommendation.id}`}><button className="playButton"><span className="textButton">PLAY {weeklyRecommendation.type.toUpperCase()}</span><PlayArrowIcon className="playArrow"/></button></Link>
                    </div>
                    <img src={weeklyRecommendation.homeCoverImage} alt={weeklyRecommendation.title} />
                </div>
                <div className="mediaListSliderContainer">
                    <div className="slider">
                        <h3>MOST LIKED</h3>
                        <MediaListSlider maxItems={12} media={dataSlider.filter(media => media.percentageOfLikes >= 90)}/>
                    </div>
                    <div className="slider">
                        <h3>NEW RELEASES</h3>
                        <MediaListSlider maxItems={12} media={dataSlider.filter(media => media.releaseTimestamp >= timestampNews)}/>
                    </div>
                    <div className="slider">
                        <h3>ADVENTURE</h3>
                        <MediaListSlider maxItems={12} media={dataSlider.filter(media => media.category === 'adventure')}/>
                    </div>
                    <div className="slider">
                        <h3>OLD RELEASES</h3>
                        <MediaListSlider maxItems={12} media={dataSlider.filter(media => media.releaseTimestamp <= timestampOlds)}/>
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