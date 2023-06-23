import { MediaItem } from "../mediaItem/MediaItem.jsx"

export const MediaList = ({media}) => {
    return ( 
        <div className="mediaList">
            {
            media.map((media) => (
                    <div className='item'>
                        <MediaItem 
                        key={media.id}
                        image={media.image}
                        title={media.title}
                        />
                    </div>
                ))
            }
        </div>
    )
}