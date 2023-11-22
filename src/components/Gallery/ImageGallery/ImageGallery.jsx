import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import {GalleryList  } from './ImageGallery.styled'

function ImageGallery ({ photos }) {
    return (
        <GalleryList >
            {photos.map(photo => 
                <ImageGalleryItem
                    key={photo.id}
                    tags={photo.tags}
                    webformatURL={photo.webformatURL}
                    largeImageURL={photo.largeImageURL}
                    />
            )}
        </GalleryList>
    )
}

export default ImageGallery; 