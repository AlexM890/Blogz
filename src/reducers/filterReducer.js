const filterReducerDefaultState = {
    author: '',
    title: '',
    sortBy: 'author'
}
const filterReducer = (state=filterReducerDefaultState,action) => {
    switch(action.type){
        case 'SORT_BY_AUTHOR':
            return {
                ...state,
                sortBy: 'author'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_AUTHOR':
            return {
                ...state,
                author: action.author
            }
        case 'SET_TITLE':
            return {
                ...state,
                title: action.title
            }   
        default:
            return state
    }
}

export default filterReducer