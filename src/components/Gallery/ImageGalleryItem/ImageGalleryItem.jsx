import Modal from "../Modal/Modal";
import { Component } from "react";

import {
    GalleryCard,
    GalleryLink,
    GalleryPhoto,

} from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
    state = {
    showModal: false, 
    }

    toggleModal = () => {
        this.setState(({showModal})=> ({
            showModal: !showModal,
        }))
    }

    render() {
        const { webformatURL, tags, largeImageURL } = this.props;
        const { showModal } = this.state; 

        return (
            <>
                <GalleryCard >
                    <GalleryLink onClick={this.toggleModal}>
                      <GalleryPhoto src={webformatURL} alt={tags} width="250px" />       
                    </GalleryLink>                     
                </GalleryCard > 
                {showModal &&
                    <Modal
                    largeImageURL={largeImageURL}
                    tags={tags}
                    closeModal={this.toggleModal} />
                }
            </>       
        )
    }
}

export default ImageGalleryItem; 