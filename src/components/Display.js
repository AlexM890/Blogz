import React from 'react'
import {connect} from 'react-redux'
import {addComment, removePost} from '../actions/blogActions'
import CommentForm from '../components/CommentForm'
import {Link} from 'react-router-dom'
import Comments from './Comments'

class Display extends React.Component {
    state = {
        title: this.props.blogPost ? this.props.blogPost.title : "",
        author: this.props.blogPost ? this.props.blogPost.author : "",
        body: this.props.blogPost ? this.props.blogPost.body : "",
        dateCreated: this.props.blogPost ? this.props.blogPost.dateCreated : 0,
        id: this.props.blogPost ? this.props.blogPost.id : "",
    }

    onSubmit = (comment) => {
        this.props.addComment(this.props.blogPost.id, comment)
    }

    onClick = () => {
        this.props.removePost(this.props.blogPost.id)
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="card">
                {
                this.state.title === "" ? <p>Page Does Not Exist</p> : 
                <div>
                    <div className="card-header">
                        <h2>{this.state.title}</h2>
                    </div>
                    <div className="card-body">
                        <p>{this.state.author}</p>
                        <p>{this.state.dateCreated}</p>
                        <hr/>
                        <p>{this.state.body}</p>
                    <Link to={`/edit/${this.state.id}`} className="btn bg-secondary btn-secondary">Edit</Link>
                    <button className="btn btn-secondary bg-secondary ml-2" onClick={this.onClick}>Remove Post</button>
                    </div>
                    <div className="card-footer">
                        <Comments blogPost={this.props.blogPost} />
                        <CommentForm
                            blogPost={this.props.blogPost} 
                            onSubmit={this.onSubmit}
                        />     
                    </div>
                </div>    
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    blogPost: state.blogPosts.find((item) => item.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    addComment: (id, comments) => dispatch(addComment(id, comments)),
    removePost: (id) => dispatch(removePost(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Display)