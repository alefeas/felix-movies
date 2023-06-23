import { MediaItem } from "../mediaItem/MediaItem.jsx"
import { motion } from 'framer-motion'

export const MediaListSlider = ({media}) => {
    return (
        <motion.div className='slider-container'>
            <motion.div className='slider mediaListSlider' drag='x' 
            dragConstraints={{right: 0, left:-875}}>
                {
                media.slice(0, 12).map((media) => (
                    <motion.div className='mediaItemContainer'>
                        <MediaItem 
                        key={media.id}
                        image={media.image}
                        title={media.title}
                        />
                    </motion.div>
                ))
                }
            </motion.div>
        </motion.div>
    )
}