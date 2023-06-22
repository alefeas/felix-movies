export const MediaItem = (media) => {
    return (
        <div className="mediaItem">
            <img width={200} src={media.image} alt={media.title} />
        </div>
    )
}