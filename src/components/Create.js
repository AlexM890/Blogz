import React from 'react'
import BlogForm from './BlogForm'
import {connect} from 'react-redux'
import {createBlogPost} from '../actions/blogActions'

class Create extends React.Component{
    onSubmit = (blogPost) => {
        this.props.createBlogPost(blogPost)
        this.props.history.push('/')
    }
    render(){
        return (
            <div className="container">
                <h2 className="text-center">Create Blog Post</h2>
                <BlogForm 
                    onSubmit={this.onSubmit}
                />
            </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createBlogPost: (blogPost) => dispatch(createBlogPost(blogPost))
})

export default connect(undefined,mapDispatchToProps)(Create)
