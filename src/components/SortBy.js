import React from 'react'
import {sortByAuthor, sortByDate, setAuthor, setTitle} from '../actions/filtersActions'
import {connect} from 'react-redux'

class SortBy extends React.Component {

changeSortBy = (e) =>{
    const sortBy = e.target.value
    if(sortBy === "author"){
        this.props.sortByAuthor()
    }else if(sortBy === "date"){
        this.props.sortByDate()
    }
    console.log(state.filters)
}

onAuthorChange = (e) => {
    this.props.setAuthor(e.target.value)
}
onTitleChange = (e) => {  
    this.props.setTitle(e.target.value)
}

    render(){
        return (
        <div className="row">
            <input onChange={this.onAuthorChange} className="form-control col-4" type="text" placeholder="Search by author..."/>
            <input onChange={this.onTitleChange} className="form-control col-4" type="text" placeholder="Search by title..."/>
            <select className="form-control col-4" onChange={this.changeSortBy}>
                <option value="author">Author</option>
                <option value="date">Date</option>
            </select>
        </div>
        )

    }
}


const mapDispatchToProps = (dispatch) => ({
    sortByAuthor: () => dispatch(sortByAuthor()),
    sortByDate: () => dispatch(sortByDate()),
    setAuthor: (author) => dispatch(setAuthor(author)),
    setTitle: (title) => dispatch(setTitle(title))
})

export default connect(undefined, mapDispatchToProps)(SortBy)
