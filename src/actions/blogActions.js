import uuid from 'uuid'
import moment from 'moment'

//Action Functions
export const createBlogPost = ({
    body,
    author,
    title,
    dateCreated = 0,
    
} = {}) => ({
    type: 'CREATE_BLOG_POST',
    blogPost: {
        id: uuid(),
        body,
        author,
        title,
        dateCreated:moment().format('h:mm:ss a,MMMM Do YYYY').toString(),
        comments: []
    }
})

export const removePost = (id) => ({
    type: 'REMOVE_POST',
    id
})
export const editPost =(id,updates) => ({
    type:'EDIT_POST',
    id,
    updates
})

export const addComment = (id,comments) => ({
    type:'ADD_COMMENT',
    id,
    comments
})
