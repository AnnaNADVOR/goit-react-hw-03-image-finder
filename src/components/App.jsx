import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import Error from "./Error/Error"

import fetchGallery from "services/gallery.api";

class App extends Component {
  state = {
    searchQuery: '',
    page: 1, 
    totalImages: 0,
    images: [], 
    error: null,
    loading: false,    
  }

  componentDidUpdate(_, prevState) {
    
    const { searchQuery, page } = this.state;

    if (searchQuery !== prevState.searchQuery) {
      this.setState({ loading: true, images: [], error: null, page: 1 });
    }
    
    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
           
    fetchGallery(searchQuery, page)
        .then(data => {
          if (data.hits.length === 0) {
            this.setState({ error: 'No items found! Enter other serch therm.', totalImages: 0, });
            return;
          }

          if (page === 1) {
            this.setState({images: [...data.hits],  totalImages: data.totalHits,});   
            toast.info(`Found ${data.totalHits} items.`);
            return;
          }

          this.setState(() => ({         
            images: [...prevState.images, ...data.hits],
            totalImages: data.totalHits
            }  
          ))          

       
        })
        
        .catch(error => this.setState({ error: 'Oops! Something went wrong. Try again.' }))
        .finally(() => this.setState({ loading: false }));      
    }
  }



  getSearchQuery = (value) => {
      this.setState({
      searchQuery: value, 
    })
  }

  renderMorePhotos = () => {
  
    this.setState(prevState => ({ page: prevState.page + 1, }));
   
    
  }

  showLoadMoreButton() {
    const { page, totalImages } = this.state;

    if (page < Math.ceil(totalImages / 12)) {
      
      return true;
  }

  
  }
  

  render() {
    const { searchQuery, images, error, loading } = this.state;
    const isShowButtom = this.showLoadMoreButton();
    return (
      <div>
        <Searchbar submit={this.getSearchQuery} />
        {error && <Error>{error}</Error>}
        
        {loading && <Loader/>}
        {searchQuery === "" && <div>Enter a keyword to find photos</div>}
        {images.length > 0 && <ImageGallery photos={images} />}
        {isShowButtom && !error && !loading && <LoadMoreButton click={ this.renderMorePhotos} />}

        
       
        
        <ToastContainer autoClose={3000}/>
      </div>
    )
  }

}


export default App; 