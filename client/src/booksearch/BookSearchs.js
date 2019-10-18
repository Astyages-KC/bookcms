// Created by Jeff, Sam and Nate uses hooks
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'

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
    const handleDelete = (_id) => {
        console.log(_id)
        axios.delete(`/bookscms/${_id}`)
        .then( () => setInventory(prev => prev.filter(item => item._id !== _id)))
        .catch(err => console.log(err))

    }

    // const handleUpdate = (_id, updateObject) => {
    //     console.log(_id)
    //     axios.put(`/bookscms/${_id}`, updateObject)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  name="title" onChange={handleChange} value={inputs.title} placeholder="Search By Title"/>
                <input type="text"  name="subTitle" onChange={handleChange} value={inputs.subTitle} placeholder="Search By Sub-Title"/>
                <input type="text"  name="author" onChange={handleChange} value={inputs.author} placeholder="Search By Author"/>
                <input type="text"  name="isbn" onChange={handleChange} value={inputs.isbn} placeholder="Search By ISBN"/>          
                <button>Submit</button>
            </form>

            {/* Maps over inventory and displays to the screen */}
            { inventory.map(item => {
                return (
                    <Item 
                        id={item._id}
                        title={item.title}
                        subTitle={item.subTitle}
                        author={item.author}
                        isbn={item.isbn}
                        handleDelete={handleDelete}
                    />
                )
            }
            )}
        </div>
    )
}
export default BookSearchs