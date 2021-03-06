import React,{useState} from 'react'
import { FileSearchOutlined } from  '@ant-design/icons';
import './SearchForm.css'
const SearchForm = ({search}) => {
   
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
        setSearchForm({
            searchTerm: ''
        })
    }
    
    return (
        <>
            <form className='searchForm' onSubmit={handleSubmit}>
            <input className='inputBar' type="text" name="searchTerm" placeholder='Search task...' value={searchForm.searchTerm} onChange={handleChange} />
            <button className='search-icon' type="submit"><FileSearchOutlined style={{ fontSize: '30px', color:'gray', cursor:'pointer' }} /></button>
            </form>
        </>
    )
    
}
    
    

export default SearchForm
