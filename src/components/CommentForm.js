import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/blogActions'

class CommentForm extends React.Component{
    state = {
        comments: this.props.blogPost ? this.props.blogPost.comments : [],
        error:undefined
    }

    validate = (e) => {
        e.preventDefault()
        const comment = e.target.comment.value.trim()
        if(!comment){
            this.setState(() => ({
                error: 'Please Input a comment'
            }))
        }else{
            this.setState(() => ({
                error:undefined
            }))
            e.target.comment.value = ''
            this.props.addComment(this.props.blogPost.id,comment)
        }
    }    
    
    onChange = (e) => {
        e.persist()
        this.setState(() => ({comments:[...this.props.blogPost.comments]}))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.validate}>
                    <input onChange={this.onChange} type="text" name="comment" placholder="What would you like to say..." />
                    <button>Add Comment</button>
                </form> 
                    {
                        this.state.error && <p className="alert-danger">{this.state.error}</p>
                    }
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => ({
    addComment: (id, comments) => dispatch(addComment(id, comments))
})

export default connect(undefined,mapDispatchToProps)(CommentForm)
