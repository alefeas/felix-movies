import { MediaItem } from "../mediaItem/MediaItem.jsx"
import { useSnapCarousel } from 'react-snap-carousel';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const MediaListSlider = ({media, maxItems}) => {
  const { scrollRef, next, prev } = useSnapCarousel();  

  return (
    <div className="sliderContainer">
      <button onClick={() => prev()} className="prevButton"><ArrowLeftIcon className="arrowSlider"/></button>
      <ul
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'hidden',
        gap: '.4vw',
        scrollSnapType: 'x mandatory'
      }}
      >
      {
        media.slice(0, maxItems).map(media => (
            <MediaItem 
                key={media.id}
                id={media.id}
                image={media.image}
                coverImage={media.coverImage}
                title={media.title}
                type={media.type}
                releaseTimestamp={media.releaseTimestamp}
                synopsis={media.synopsis}
            />
        ))
      }
      </ul>
      <button onClick={() => next()} className="nextButton"><ArrowRightIcon className="arrowSlider"/></button>
    </div>
  )
}