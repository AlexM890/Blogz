import React from 'react'
import {connect} from 'react-redux'
import {createBlogPost} from '../actions/blogActions'
import moment from 'moment'

class blogForm extends React.Component{
    state ={
        author: this.props.blogPost ? this.props.blogPost.author : '',
        title: this.props.blogPost ? this.props.blogPost.title : '',
        body: this.props.blogPost ? this.props.blogPost.body : '',
        aError: undefined,
        tError: undefined,
        bError: undefined
    }
    onAuthorChange = (e) => {
        e.persist()
        this.setState(() => ({author:e.target.value}))
   
    }
    onTitleChange = (e) => {
        e.persist()
        this.setState(() => ({title:e.target.value}))
    }
    onBodyChange = (e) => {
        e.persist()
        this.setState(() => ({body: e.target.value}))
    }
    validate = (e) =>{
        e.preventDefault()
        const error = {
            aError:undefined,
            tError: undefined,
            bError: undefined
        }
        if(!this.state.author){
            error.aError = 'Please input a author'
        }else{
             error.aError = undefined
        }

        if(!this.state.title){
            error.tError = 'Please input a title'
        }else{
            error.tError = undefined
        }
        if(!this.state.body){
            error.bError = 'You forgot to say something'
        }else{
            error.bError = undefined
        }

        if(!error.aError && !error.tError && !error.bError){
            this.props.onSubmit({
                author: this.state.author,
                title: this.state.title,
                body: this.state.body,
                dateCreated: moment().format('h:mm:ss a, MMMM Do YYYY').toString()
            })
        }
        this.setState(() => ({
            aError: error.aError,
            tError: error.tError,
            bError: error.bError
        }))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.validate} className="row justify-content-center align-items-center" >
                    <div className="d-column col-5">
                        <h4>title</h4>
                        <input type="text" className="form-control" placeholder="Email Address..." onChange={this.onTitleChange} value={this.state.title}/>
                        {
                            this.state.tError && <p className="bg-danger pl-3 text-light">{this.state.tError}</p>
                        }
                        <h4>Author</h4>
                        <input type="text" className="form-control" placeholder="Author..."  onChange={this.onAuthorChange} value={this.state.author}/>
                        {
                            this.state.aError && <p className="bg-danger pl-3 text-light">{this.state.aError}</p>
                        }
                        <h4>Blog Body</h4>
                        <textarea className="form-control mb-3" placeholder="What would you like to say..." onChange={this.onBodyChange} value={this.state.body} />
                        <div className="row justify-content-center">
                            <button className="btn btn-primary bg-primary mx-auto">Post Blog</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createBlogPost: (blogPost) => dispatch(createBlogPost(blogPost))
})

export default connect(undefined,mapDispatchToProps)(blogForm)
