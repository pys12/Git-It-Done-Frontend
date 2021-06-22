import React,{useState} from 'react'
import { FcSearch } from "react-icons/fc";

const Search = ({search}) => {
   
    const [searchForm, setSearchForm] = useState({
        searchTerm: ''
    })

    const handleChange = (e) => {
        setSearchForm({ ...searchForm, [e.target.name]: e.target.value });
        console.log('searchForm: ' + searchForm)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        search(searchForm.searchTerm)
        console.log('searchForm.search term: ' + searchForm.searchTerm)
    }
    
    return (
        <form>
            <input type="text" name="searchTerm" placeholder='Search by title...' value={searchForm.searchTerm} onChange={handleChange} />
            <FcSearch onClick={handleSubmit} />
        </form>
    )
    
}
    
    

export default Search
