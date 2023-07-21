import { MediaItem } from '../../components/mediaItem/MediaItem.jsx'
import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext.jsx'

export const MyList = () => {
    const favoritesCtx = useContext(FavoritesContext)

    return (
        <div className='myListContainer'>
            <h3>MY LIST</h3>
            <div className='mediaList myList'>
                {
                    favoritesCtx.favoritesList.length > 0 ?
                    favoritesCtx.favoritesList.map(media => (
                        <div className='item'>
                            <MediaItem 
                            key={media.id}
                            id={media.id}
                            image={media.image}
                            title={media.title}
                            type={media.type}
                            releaseTimestamp={media.releaseTimestamp}
                            coverImage={media.coverImage}
                            synopsis={media.synopsis}
                            />
                        </div>
                    ))
                    : <span>Favorites list it is empty.</span>
                }
            </div>
        </div>
    )
}