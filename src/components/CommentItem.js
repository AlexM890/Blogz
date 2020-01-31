import React from 'react'
import {connect} from 'react-redux'

const CommentItem = (props) => (
    <div>
        <h5>{props.count}:{props.text}</h5>
    </div>
)



export default CommentItem