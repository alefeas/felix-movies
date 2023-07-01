import { MediaItem } from "../mediaItem/MediaItem.jsx"
import { useSnapCarousel } from 'react-snap-carousel';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const MediaListSlider = ({media}) => {
  const { scrollRef, next, prev } = useSnapCarousel();  

  return (
    <div className="sliderContainer">
      <button onClick={() => prev()} className="prevButton"><ArrowLeftIcon fontSize="large"/></button>
      <ul
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'hidden',
        gap: '5px',
        scrollSnapType: 'x mandatory'
      }}
      >
      {media.slice(0, 12).map(media => (
          <MediaItem 
              key={media.id}
              id={media.id}
              image={media.image}
              coverImage={media.coverImage}
              title={media.title}
              releaseTimestamp={media.releaseTimestamp}
              synopsis={media.synopsis}
          />
      ))}
      </ul>
      <button onClick={() => next()} className="nextButton"><ArrowRightIcon fontSize="large"/></button>
    </div>
  )
}