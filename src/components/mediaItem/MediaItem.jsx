import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext.jsx'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: '#141414',
    boxShadow: 24,
    outline:'none',
    p: 0,
}
const styleBoxText = {
    p:4,
}

export const MediaItem = (media) => {
    const [open, setOpen] = useState(false)
    const [year, setYear] = useState('')
    const [favorite, setFavorite] = useState(false)
    
    const favoritesCtx = useContext(FavoritesContext)
    const itemFound = favoritesCtx.favoritesList.filter(item => media.id === item.id)

    const handleOpen = (timestamp) => {
        const dateFormat = timestamp*1000
        const date = new Date(dateFormat)
        const year = date.toString().split(' ')
        setYear(year[3])
        if (itemFound.length !== 0) {
            setFavorite(true)
        }
        setOpen(true)
    }
    
    const handleClose = () => setOpen(false)

    const addToFavorite = () => {
        if (itemFound.length !== 0) {
            favoritesCtx.removeItem(media.id)
            setFavorite(false)
            return
        } else if (favorite) {
            setFavorite(false)
            favoritesCtx.removeItem(media.id)
            return
        } else if (favorite === false) {
            setFavorite(true)
            favoritesCtx.addItem(media)
            return    
        }
    }
    return (
        <div className="mediaItem">
            <img onClick={() => handleOpen(media.releaseTimestamp)} src={media.image} alt={media.title} />
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                <div>
                <button className='modalCloseButton' onClick={handleClose}><CloseIcon/></button>
                <img className='modalCoverImage' src={media.coverImage} alt={media.title} />
                </div>
                <Box sx={styleBoxText}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {media.title} ({year})
                </Typography>
                    <Link to={`/media/${media.id}`}><button className='playButton'><span className="textButton">PLAY MOVIE</span><PlayArrowIcon className="playArrow"/></button></Link>
                <Button onClick={addToFavorite}>
                    {
                        itemFound.length === 0 && window.location.pathname !== '/my-list'?
                        <FavoriteBorderIcon/>
                        : <FavoriteIcon/>
                    }
                </Button>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {media.synopsis}
                </Typography>
                </Box>
                </Box>
            </Modal>
        </div>
    )
}