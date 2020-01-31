import React from 'react'
import { connect } from 'react-redux'
import BlogsList from './BlogsList'

const Home = (props) => (
    <div>
        <div>
            {
             props.blogPosts.length > 0  && <BlogsList />
            }
        </div>   
    </div>
)

const mapStateToProps = (state) => ({
    blogPosts: state.blogPosts
})

export default connect(mapStateToProps)(Home)