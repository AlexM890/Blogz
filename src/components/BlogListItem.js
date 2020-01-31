import React from 'react'
import {Link} from 'react-router-dom'
const BlogListItem = ({id, title, author,dateCreated}) => (
    <div className="card col-3">
        <Link to={`/display/${id}`}>{title}</Link>
        <ul className="card-body">
            <li>Author: {author}</li>
            <li>Date Created: {dateCreated}</li>
        </ul>
    </div>
)

export default BlogListItem