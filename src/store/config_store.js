import {createStore, combineReducers} from 'redux'
import blogReducer from '../reducers/blogReducer'
import filterReducer from '../reducers/filterReducer'

export default () =>{
    return createStore(combineReducers({
        blogPosts: blogReducer,
        filters: filterReducer
    }))
}