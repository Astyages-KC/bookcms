import React, { Component } from 'react'
import BookUpdate from '../bookupdate/BookUpdate.js'


class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle: false,
            title: props.title,
            subTitle: props.subTitle,
            author: props.author,
            isbn: props.isbn,
            price: props.price,
            cost: props.cost
        }
    }

    toggler = () => this.setState(prevState => ({toggle: !prevState.toggle}))

     // sets the values of inputs to the inputs objects array
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    // on submit, displays search items
    handleSubmit = (event) => {
        event.preventDefault()
        
        const id = this.props.id
        const updates = {
            toggle: false,
            title: this.state.title,
            subTitle: this.state.subTitle,
            author: this.state.author,
            isbn: this.state.isbn,
            price: this.state.price,
            cost: this.state.cost 
        }

        this.props.handleEdit(id, updates)
        this.toggler()
    }

    render(){
        return( 
            <div className="item">
                {!this.state.toggle ? 
                    <div class="single">
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.subTitle}</h2>
                        <h4>{this.props.author}</h4>
                        <h5>{this.props.isbn}</h5>
                        <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                        <button onClick={() => this.toggler()}>Update</button>
                    </div>
                    :
                    <>
                    <BookUpdate
                        id={this.props.id}
                        title={this.state.title}
                        subTitle={this.state.subTitle}
                        author={this.state.author}
                        price={this.state.price}
                        cost={this.state.cost}
                        isbn={this.state.isbn}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        toggler={this.toggler}
                    />
                    <button onClick={this.toggler}>Cancel</button>
                    </>
                }
            </div>
        )
    }
}

export default Item