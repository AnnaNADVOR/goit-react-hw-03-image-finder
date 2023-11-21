import Modal from "components/Modal/Modal";
import { Component } from "react";


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
                <li>
                    <a onClick={this.toggleModal}>
                      <img src={webformatURL} alt={tags} width="250px" />       
                    </a>                     
                </li> 
                
                {showModal && <Modal largeImageURL={largeImageURL} tags={tags} closeModal={this.toggleModal}  />
                    }

            </>
                
            
            
          
        )
    }
}

// function ImageGalleryItem({ tags, webformatURL, largeImageURL }) {
//     return (
//         <li>
            
//                <img src={webformatURL} alt={tags} /> 
           
            
//         </li>
//     )
// }

export default ImageGalleryItem; 