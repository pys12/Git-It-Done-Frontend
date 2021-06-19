import React,{useState} from 'react'

const Form = ({createTask}) => {
    const [form, setForm] = useState({
        title: "",
        description: "",
        categories:""
    })

    const handleChange = (e) => {
       // console.log(e.target.name);
        setForm({...form, [e.target.name]: e.target.value });
        //console.log(form)
      };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const card = form;
        card.userId=JSON.parse(localStorage.getItem('user')).googleId
        console.log(card.userId.googleId)
        createTask(card);
        setForm({
            title: "",
            description: "",
            categories:""
        })
    }
    return (
        <div>
             <form  onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name='title' placeholder='Add a task' value={form.title} onChange={handleChange}/>
                <label>Description</label>
                <input type="text" name='description' placeholder='Add a detailed description' value={form.description} onChange={handleChange}/>
                <label>Categories</label>
                <input type="text" name='categories' placeholder='Pick a category' value={form.categories} onChange={handleChange}/>
                <input type="submit" value='Save' />
            </form>
        </div>
    )
}

export default Form
