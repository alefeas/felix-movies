import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetchItem, firestoreFetchCategory } from "../../fetch/firestoreFetch.js";
import { Loader } from '../loader/Loader.jsx'
import { MediaListSlider } from "../mediaListSlider/MediaListSlider.jsx";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterAppIcon from '@mui/icons-material/Twitter';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export const MediaView = () => {
    const [data, setData] = useState({})
    const [dataRecommended, setDataRecommended] = useState([])
    const { idItem } = useParams()
    
    useEffect(() => {
        firestoreFetchCategory()
        .then(res => setDataRecommended(res))
        .catch(err => console.log(err))
    }, [])
    
    useEffect(() => {
        firestoreFetchItem(idItem)
        .then(res => setData(res))
        .catch(err => console.log(err))
    }, [idItem])
    
    const dateFormat = data.releaseTimestamp*1000
    const date = new Date(dateFormat)
    const year = date.toString().split(' ')
    const releaseYear = year[3]

    const hours = Math.floor(data.duration / 60);
    const minutes = Math.floor((data.duration*60 - (hours * 3600)) / 60);

    return (
        <div className="viewContainer">
        {
            data.video && data.image ?
            <>
                <div className="movieInfoContainer">
                    <div>
                    <img src={data.image} alt={data.title} className="movieImg"/>
                    </div>
                    <div className="infoShareContainer">
                    <div className="dataMovie">
                        <div>
                            <h3>{data.title} ({releaseYear})</h3>
                        </div>
                    <div>
                        </div>
                        <div className="synopsisCategoryContainer">
                            <p className="synopsis">{data.synopsis}</p>  
                            <p>Genre: {data.category}</p>
                            {
                                data.type === 'movie' ?
                                <p>Duration: {`${hours}h ${minutes}m`}</p>
                                : <></>
                            }
                            <div className="percentageOfLikes">{data.percentageOfLikes}% <ThumbUpOffAltIcon className="ThumbUpOffAltIcon"/></div>
                            
                        </div>
                    </div>
                    <div className="shareContainer">
                        <span className="movieShare">Share</span>
                        <div>
                        <a href={`https://web.whatsapp.com/send?text=Hello, i recommend you to watch "${data.title}" in FELIX. Here you have the link: ${window.location.href}`} target="blank"> <WhatsAppIcon className="shareIcon wppIcon"/> </a>   
                        <a href={`https://twitter.com/intent/tweet?text=Hello, i recommend you to watch "${data.title}" in FELIX. Here you have the link: ${window.location.href}`} target="blank"><TwitterAppIcon className="shareIcon twitterIcon"/></a>   
                        </div>
                    </div>
                    </div>
                </div>
                <video className="movieVideo" poster={data.coverImage} controls src={data.video}></video>
                <div className="slider">
                    <h3>MOST LIKED MOVIES</h3>
                    <MediaListSlider className='mediaViewSlider' maxItems={15} media={dataRecommended.filter(media => media.percentageOfLikes >= 87 && media.type === 'movie' && media.title !== data.title)}/>
                </div>
            </>
            : <Loader/>
        }
        </div>
    )
}