// Created by Jeff, Sam and Nate uses hooks
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './BookSearch.css'

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

    return(
        <div className="bookSearchsPage">
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
                    <div key={item._id}>
                        <h1 >{item.title}</h1>
                        <h4>{item.subTitle}</h4>
                        <h5>{item.isbn}</h5>
                        <button>Delete</button><button>Update</button>
                    </div>
                )
            }
            )}
        </div>
    )
}
export default BookSearchs