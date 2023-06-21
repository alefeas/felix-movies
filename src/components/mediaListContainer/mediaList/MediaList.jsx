import { MediaItem } from "../media/MediaItem.jsx"

export const MediaList = ({media}) => {
    return(
        <>
        {
        media.map((media) => (
            <MediaItem 
            key={media.id}
            title={media.title}
            releaseYear={media.releaseYear}
            />
        ))
        }
        </>
    )
}