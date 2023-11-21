import ImageGalleryItem from '../../ImageGalleryItem/ImageGalleryItem';

function ImageGallery ({ photos }) {
    return (
        <ul style={{
            display: 'inline-flex', flexWrap: "wrap", gap: "20px"
        }}>
            {photos.map(photo => 
                <ImageGalleryItem
                    key={photo.id}
                    tags={photo.tags}
                    webformatURL={photo.webformatURL}
                    largeImageURL={photo.largeImageURL}
                    />
            )}

        </ul>
    )
}

export default ImageGallery; 