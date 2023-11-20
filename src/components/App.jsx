import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

import Searchbar from "./Searchbar/Searchbar";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1, 
    loading: false,
    images: [], 
    
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("update")
    // console.log(this.state.searchQuery , prevState.searchQuery  )
    
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.setState({ loading: true });
      console.log("to", this.state.loading)
      const API_KEY = "39912863-1650dbe31ef88f10e118c8e6a";
      const URL = `https://pixabay.com/api/?q=${this.searchQuery}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

    
      axios.get(URL)
        .then(response => this.setState({ images: response.data.hits }))
        .catch(function (error) {
   
          console.log(error);
        })
        .finally(() => {
          this.setState({ loading: false }); 
          console.log("after",this.state.loading)
        } 

          
      )
    
      
    }
  }
  



  getSearchQuery = (value) => {
    
    this.setState({
      searchQuery: value, 
    })
  }


  render() {
    const { searchQuery, loading, images } = this.state;

    return (
      <div>
        <Searchbar submit={this.getSearchQuery} />
        {loading === true && <div>Load</div>}
        {searchQuery === "" && <div>to start a search, enter a keyword in the search field</div>}
        {images.length > 0 && <ImageGalleryItem/>}
        
        <ToastContainer autoClose={3000}/>
      </div>
    )
  }

}


export default App; 