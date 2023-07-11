import { MediaItem } from '../../components/mediaItem/MediaItem.jsx'
import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext.jsx'
import { Loader } from '../../components/loader/Loader.jsx'

export const MyList = () => {
    const favoritesCtx = useContext(FavoritesContext)

    return (
        <>
            <h3>MY LIST</h3>
            <div className='mediaList'>
                {
                    favoritesCtx.favoritesList.length > 0 ?
                    favoritesCtx.favoritesList.map(media => (
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
                    : <span>Favorites list it is empty.</span>
                }
            </div>
        </>
    )
}