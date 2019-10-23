// This is the code for Book Entry
import React, { useState } from "react";
import axios from "axios";
import './BookEntry.css'

function BookEntry() {

    const initInputs = {
        title: "",
        subTitle: "",
        author: "",
        price: "",
        cost: "",
        isbn: ""
    };
    const [inputs, setInputs] = useState(initInputs);
    const [modalOpen, setModalOpen] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
    };
    const handleSubmit = e => {
        e.preventDefault();

        axios.post(`/bookscms/`, inputs)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err.data));
        setModalOpen(prev => !prev)
        
    }
    
    return (
        <div className="bookEntryPage">
            <div className="overlay">
                <div className="formPositionEntry">
            <form onSubmit={handleSubmit}>
                <label> Title:
                    <input
                        type="text"
                        value={inputs.title}
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label> SubTitle:
                    <input
                        type="text"
                        value={inputs.subTitle}
                        name="subTitle"
                        placeholder="SubTitle"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label> Author:
                    <input
                        type="text"
                        value={inputs.author}
                        name="author"
                        placeholder="Author"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label> Price:
                    <input
                        type="number"
                        value={inputs.price}
                        name="price"
                        placeholder="Price"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label> Cost:
                    <input
                        type="number"
                        value={inputs.cost}
                        name="cost"
                        placeholder="Cost"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label> ISBN:
                    <input
                        type="number"
                        value={inputs.isbn}
                        name="isbn"
                        placeholder="ISBN"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" className="submitButtonEntry"  />
                
            </form>
            { modalOpen && 
                <div className="modal">
                    <h1>Book Was Entered Succesfully.</h1>
                    <h2>Title: {inputs.title}</h2>
                    <h3>Sub-Title: {inputs.subTitle}</h3>
                    <h3>Author: {inputs.author}</h3>
                    <h5>ISBN: {inputs.isbn}</h5>
                    <h5>Purchase Price: ${inputs.cost}</h5>
                    <h5>Sale Price: ${inputs.price}</h5>
                    <button onClick={() => setModalOpen(p => !p)}>Close</button>
                </div>
            }
            </div>
            </div>
        </div>
    );
}

export default BookEntry;