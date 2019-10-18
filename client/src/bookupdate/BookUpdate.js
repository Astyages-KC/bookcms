import React from "react";

function BookUpdate(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label> Title:
                    <input
                        type="text"
                        value={props.title}
                        name="title"
                        placeholder="Title"
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <label> SubTitle:
                    <input
                        type="text"
                        value={props.subTitle}
                        name="subTitle"
                        placeholder="SubTitle"
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <label> Author:
                    <input
                        type="text"
                        value={props.author}
                        name="author"
                        placeholder="Author"
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <label> Price:
                    <input
                        type="number"
                        value={props.price}
                        name="price"
                        placeholder="Price"
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <label> Cost:
                    <input
                        type="number"
                        value={props.cost}
                        name="cost"
                        placeholder="Cost"
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <label> ISBN:
                    <input
                        type="number"
                        value={props.isbn}
                        name="isbn"
                        placeholder="ISBN"
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default BookUpdate;