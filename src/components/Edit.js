import React from 'react'
import {connect} from 'react-redux'
import {editPost} from '../actions/blogActions'
import BlogForm from './BlogForm'

class Edit extends React.Component{
    onSubmit=(updates) => {
        this.props.editPost(this.props.blogPost.id, updates)
        this.props.history.push('/')
    }
    
    render(){
        console.log(this.props.blogPost)
        return (
            <div>
                {
                    !this.props.blogPost ? <p>Page Does Not Exist</p> :
                <div>
                    <h2 className="text-center">Edit Blog Post</h2>
                    <BlogForm 
                        onSubmit={this.onSubmit}
                        blogPost={this.props.blogPost}
                    />
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
    editPost: (id,updates) => dispatch(editPost(id,updates)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)