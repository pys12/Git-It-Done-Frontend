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
            <form className='searchForm'>
            <input className='inputBar' type="text" name="searchTerm" placeholder='Search by task title...' value={searchForm.searchTerm} onChange={handleChange} />
            <FileSearchOutlined style={{ fontSize: '30px', color:'gray' }} onClick={handleSubmit} />
            </form>
        </>
    )
    
}
    
    

export default SearchForm
