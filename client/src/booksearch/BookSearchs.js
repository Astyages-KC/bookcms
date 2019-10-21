// Created by Jeff, Sam and Nate uses hooks
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './BookSearch.css'
import Item from './Item.js'

const BookSearchs = () => {

    const [inventory, setInventory] = useState([])
    const [inputs, setInputs] = useState( {title: "", subTitle: "", author: "", isbn: ""} )

    // gets all inventory on startup
    useEffect(() => {
        axios.get("/bookscms")
            .then(res => {
                setInventory(res.data)
            })
            .catch(err => console.log(err.data))
    }, [])

    // sets the values of inputs to the inputs objects array
    const handleChange = (event) => {
        const { name, value } = event.target
        setInputs( prevInputs => ({
            ...prevInputs,
            [name]:value
        }))
    }

    // on submit, displays search items
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.get(`/bookscms/search?title=${inputs.title}&subTitle=${inputs.subTitle}&author=${inputs.author}&isbn=${inputs.isbn}`)
        .then(res => setInventory(res.data))
        .catch(err => console.log(err))
    }
    // deletes an item from the database
    const handleDelete = (_id) => {
        axios.delete(`/bookscms/${_id}`)
        .then( () => setInventory(prev => prev.filter(item => item._id !== _id)))
        .catch(err => console.log(err))
    }
    // edits an item from the database
    const handleEdit = (id, updates) => {
        axios.put(`/bookscms/${id}`, updates)
        .then(res => {
            setInventory(prev => {
                const updatedInventory = inventory.map(item => {
                    if(item._id === id){
                        return res.data
                    }else{
                        return item
                    }
                })
                return updatedInventory
                
            })
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="bookSearchsPage">
            <form className="searchForm" onSubmit={handleSubmit}>
                <input type="text"  name="title" onChange={handleChange} value={inputs.title} placeholder="Search By Title"/>
                <input type="text"  name="subTitle" onChange={handleChange} value={inputs.subTitle} placeholder="Search By Sub-Title"/>
                <input type="text"  name="author" onChange={handleChange} value={inputs.author} placeholder="Search By Author"/>
                <input type="text"  name="isbn" onChange={handleChange} value={inputs.isbn} placeholder="Search By ISBN"/>          
                <button>Submit</button>
            </form>

            {/* Maps over inventory and displays to the screen */}
            { inventory.map(item => {
                return (
                    <div className="thisThing">
                    <Item key={item._id} 
                        id={item._id}
                        title={item.title}
                        subTitle={item.subTitle}
                        author={item.author}
                        isbn={item.isbn}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                    </div>
                )
            }
            )}
        </div>
    )
}
export default BookSearchs