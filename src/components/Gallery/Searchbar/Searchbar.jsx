import { BiSearchAlt } from "react-icons/bi";
import { toast } from 'react-toastify';
import { Component } from "react";

import {
    Header,
    SearchForm,
    SearchField,
    SearchButton,

} from "./Searchbar.styled";

class Searchbar extends Component {
    state = {
        searchQuery: "",
    }

    onSubmitForm = (event) => {
        event.preventDefault(); 

        if (this.state.searchQuery.trim() === "") {
           return toast.error("Enter you serch therm!");
        }

        this.props.submit(this.state.searchQuery);

        // this.setState({
        //     searchQuery: "",
        // })
    }

    onInputChange = event => {
        const normaliseQuery = event.currentTarget.value.toLocaleLowerCase();
        this.setState({
            searchQuery: normaliseQuery,
        })
    }
  
    render() {
        return(
            <Header>
                <SearchForm  onSubmit={this.onSubmitForm}>
                    <SearchField     
                        type="text"                                     
                        placeholder="Search images and photos"
                        value={this.state.searchQuery}
                        onChange={this.onInputChange}
                     />
                    <SearchButton type="submit">
                        <BiSearchAlt />
                    </SearchButton>
                </SearchForm >
            </Header>
        )
    }

}

export default Searchbar; 