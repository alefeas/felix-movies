export const MediaItem = (media) => {
    return (
        <div className="mediaItem">
            <img src={media.image} alt={media.title} />
        </div>
    )
}