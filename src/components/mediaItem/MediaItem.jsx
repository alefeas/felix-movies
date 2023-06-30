import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#141414',
  border: '1px solid #fff',
  boxShadow: 24,
  p: 4,
}

export const MediaItem = (media) => {
    const [open, setOpen] = useState(false)
    const [year, setYear] = useState('')

    const handleOpen = (timestamp) => {
        const dateFormat = timestamp*1000
        const date = new Date(dateFormat)
        const year = date.toString().split(' ')
        setYear(year[3])
        setOpen(true)
    }
    const handleClose = () => setOpen(false)

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
                <button className='modalCloseButton' onClick={handleClose}><CloseIcon/></button>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {media.title}<span className={open === false ? 'disabled' : ''}> ({year})</span>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>
        </div>
    )
}