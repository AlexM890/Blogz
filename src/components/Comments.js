import React from 'react'
import {connect} from 'react-redux'
import CommentItem from './CommentItem'

const Comments = (props) => (
    <div>
        <div className="">
            <h3 className="widget-header__title">Comments</h3>
        </div>
        {props.blogPost.comments.length === 0 && <p>There are no current comments</p> }
        {
            props.blogPost.comments.map((item,index) => (
                <CommentItem 
                    key={item}
                    count={index+1}     
                    text={item}
                />
            ))
        }            
    </div>
)


export default Comments