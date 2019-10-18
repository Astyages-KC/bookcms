import React, { Component } from 'react'
import BookEntry from '../bookentry/BookEntry.js'

class Item extends Component {
    constructor(){
        super()
        this.state = {
            toggle: false
        }
    }

    toggler = () => this.setState(prevState => ({toggle: !prevState.toggle}))

    render(){
        return( 
            <div key={this.props.id}>
                {!this.state.toggle ? 
                    <>
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.subTitle}</h2>
                        <h4>{this.props.author}</h4>
                        <h5>{this.props.isbn}</h5>
                        <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                        <button onClick={() => this.toggler()}>Update</button>
                    </>
                    :
                    <>
                    <BookEntry />
                    <button onClick={this.toggler}>Submit</button>
                    </>
                }
            </div>
        )
    }
}

export default Item