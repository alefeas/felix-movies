import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage.js"
export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({children}) => {
    const [favoritesList, setFavoritesList] = useLocalStorage('favoritesList', [])

    const addItem = (item) => {
        let found = favoritesList.find(media => media.idItem === item.id)
        if (found === undefined) {
            setFavoritesList([
                ...favoritesList,
                {
                    id:item.id,
                    title:item.title,
                    image:item.image,
                    synopsis:item.synopsis,
                    coverImage:item.coverImage,
                    releaseTimestamp:item.releaseTimestamp
            }])
        }
    }
    const removeItem = (id) => {
        let result = favoritesList.filter(item => item.id !== id)
        setFavoritesList(result)
    }
    const clear = () => {
        if (favoritesList.length > 0) {
            setFavoritesList([])
        } else {

        }
    }
    return(
        <FavoritesContext.Provider value={{favoritesList, addItem, clear, removeItem}}>
            { children }
        </FavoritesContext.Provider>
    )
}