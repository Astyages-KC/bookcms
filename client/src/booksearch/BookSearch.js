// // Jeff made coded this Sam helped me do the search function
// import React, { Component } from 'react'
// import axios from 'axios'

// class BookSearch extends Component {
//     constructor(){
//         super()
//         this.state = {
//             inventory: [],
//             title: "",
//             subTitle: "",
//             author:"",
//             isbn: ""
//         }
//     }

//     componentDidMount(){
//         axios.get("/bookscms")
//         .then(res => {
//             this.setState({inventory: res.data}) // can console.log(res.data) cant get it in inventory though
//         })
//         .catch(error => console.log(error.data))
//     }

//     handleChange = (event) => {
//         console.log("TEsting")
//         this.setState({
//             [event.target.name]:event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         axios.get(`/bookscms/search?title=${this.state.title}&subTitle=${this.state.subTitle}&author=${this.state.author}&isbn=${this.state.isbn}`)
//         .then(res => this.setState({inventory: res.data}))
//         .catch(err => console.log(err))
//     }

//     render(){
//     const mappedinventory = this.state.inventory.map(item => {
//         return (
//             <div key={item._id}>
//                 <h1>{item.title}</h1>
//                 <h3>{item.subTitle}</h3>
//                 <h4>{item.author}</h4>
//                 <p>{item.isbn}</p>
//             </div>
//         )
//     })
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text"  name="title" onChange={this.handleChange} value={this.state.value} placeholder="Search By Title"/>
//                     <input type="text"  name="subTitle" onChange={this.handleChange} value={this.state.value} placeholder="Search By Sub-Title"/>
//                     <input type="text"  name="author" onChange={this.handleChange} value={this.state.value} placeholder="Search By Author"/>
//                     <input type="text"  name="isbn" onChange={this.handleChange} value={this.state.value} placeholder="Search By ISBN"/>
//                     <button>Submit</button>
//                 </form>
//                 {mappedinventory}
//             </div>
//         )
//     }
// }

// // This is the code for book search


// // Axios calls
//     // search by :
//         //title
//         //subTitle
//         //author
//         //isbn


// // map over my items returned by axios call
// //then display it on the screen

// // have a search form


// export default BookSearch