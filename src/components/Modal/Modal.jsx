import { Component } from "react";

class Modal extends Component {

    componentDidMount() {
       
        window.addEventListener("keydown", this.onEscClick

        )
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
            const { largeImageURL, tags} = this.props;
            return (
                <div onClick={this.onOverlayClisk} style={{ position: 'fixed', backgroundColor: 'rgba(0,0,0,0.5)', top: 0, left: 0, width: '100vw', height: '100vh' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <img src={largeImageURL} alt={tags} width='100%' />
                    </div>
                </div>
            )
           
        }
    }

export default Modal; 