const blogReducerDefaultState = []
const blogReducer = (state=blogReducerDefaultState,action) => {
    switch(action.type){
        case "ADD_COMMENT":
            return state.map((item) => {
                if(item.id === action.id){
                    return{
                        ...item,
                        comments: [...item.comments, action.comments]
                        
                    }
                } else {
                    return item
                }
            })
        case 'CREATE_BLOG_POST':
            return [...state, action.blogPost]
        case 'REMOVE_POST':
            return state.filter((item) => item.id !== action.id)
        case 'EDIT_POST':
            return state.map((item) => {
                if(item.id === action.id){
                    return{
                        ...item,
                        ...action.updates
                    }
                } else {
                    return item
                }
            })
        default:
            return state
    }
}

export default blogReducer