import { BiSearchAlt } from "react-icons/bi";
import { toast } from 'react-toastify';

import { Component } from "react";

class Searchbar extends Component {
    state = {
        searchQuery: "",
    }

    onSubmitForm = (event) => {
        event.preventDefault(); 

        if (this.state.searchQuery.trim() === "") {
             toast.error("Error Notification !")
            return;
        }

        this.props.submit(this.state.searchQuery);

        this.setState({
            searchQuery: "",
        })
    }

    onInputChange = event => {
        const normaliseQuery = event.currentTarget.value.toLocaleLowerCase();
        this.setState({
            searchQuery: normaliseQuery,
        })
    }

    
    
    render() {
        return(
            <header>
                <form onSubmit={this.onSubmitForm}>
                    <input      
                    type="text"                                     
                    placeholder="Search images and photos"
                    value={this.state.searchQuery}
                    onChange={this.onInputChange}
                     />
                    <button type="submit">
                    <span><BiSearchAlt /></span>
                    </button>
                </form>
            </header>
        )
    }

}

export default Searchbar; 