import React from 'react'
import BlogListItem from './BlogListItem'
import filterBlogs from '../selectors/selectors'
import {connect} from 'react-redux'
import SortBy from './SortBy'

const BlogsList = (props) => {
    console.log(props.blogPosts)
    return (
        <div>
            <h1>Blogz Here...</h1>
            <SortBy />
            <div className="row justify-conter-center">
                {
                        props.blogPosts.map((item) => (
                            <BlogListItem key={item.id} {...item} />
                        ))
                }
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    blogPosts: filterBlogs(state.blogPosts, state.filters)
})

export default connect(mapStateToProps, undefined)(BlogsList)