export default function fetchGallery(searchQuery, page) {
  const API_KEY = '39912863-1650dbe31ef88f10e118c8e6a';
  const URL = `https://pixabay.com/api/?
    q=${searchQuery}&
    page=${page}&
    key=${API_KEY}&
    image_type=photo&
    orientation=horizontal&
    per_page=12`

  return fetch(URL).then(response => 
    response.json()
  )    
}



