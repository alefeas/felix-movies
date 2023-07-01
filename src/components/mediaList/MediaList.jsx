import { MediaItem } from "../mediaItem/MediaItem.jsx"

export const MediaList = ({media}) => {
    return ( 
        <div className="mediaList">
            {
            media.map((media) => (
                    <div className='item'>
                        <MediaItem 
                        key={media.id}
                        id={media.id}
                        image={media.image}
                        title={media.title}
                        releaseTimestamp={media.releaseTimestamp}
                        coverImage={media.coverImage}
                        synopsis={media.synopsis}
                        />
                    </div>
                ))
            }
        </div>
    )
}