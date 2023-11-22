import { Component } from "react";

import {
    Overlay,
    ModalField,
    ModalPhoto
} from './Modal.styled'

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.onEscClick)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscClick);
    }
   
    onEscClick= (event) => {
        if (event.code === "Escape") {
            this.props.closeModal();
        }
    }

    onOverlayClisk = (event) => {
        if (event.target === event.currentTarget) {
            this.props.closeModal();
        }
    }
      
    render() {
        const { largeImageURL, tags } = this.props;
        
        return (
            <Overlay onClick={this.onOverlayClisk}>
                <ModalField>
                    <ModalPhoto src={largeImageURL} alt={tags} />
                </ModalField>
            </Overlay>
        )           
    }
}

export default Modal; 