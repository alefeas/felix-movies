import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                    type:item.type,
                    image:item.image,
                    synopsis:item.synopsis,
                    coverImage:item.coverImage,
                    releaseTimestamp:item.releaseTimestamp
            }])
            toast('❤️ ADD TO FAVORITES', {
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                className: "toast"
            });
        }
    }
    const removeItem = (id) => {
        let result = favoritesList.filter(item => item.id !== id)
        setFavoritesList(result)
        toast('💔 REMOVED FROM FAVORITES', {
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            className: "toast"
        });
    }
    const clear = () => {
        if (favoritesList.length > 0) {
            setFavoritesList([])
        }
    }
    return(
        <FavoritesContext.Provider value={{favoritesList, addItem, clear, removeItem}}>
            { children }
        </FavoritesContext.Provider>
    )
}