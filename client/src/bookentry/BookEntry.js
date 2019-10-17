// This is the code for Book Entry

import React, { useState } from "react";
import axios from "axios";

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



    }
    return (
        <div>

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
                <input type="submit" value="Submit" />


                {/* <button onClick={() => setTitle(title + " stuff")}> a button to click </button> */}
            </form>

        </div>
    );
}

export default BookEntry;