import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import {Provider} from 'react-redux'
import './styles/styles.scss'
import newStore from './store/config_store'
import AppRouter from './routers/AppRouter'
import { createBlogPost } from './actions/blogActions'


const store = newStore()
store.subscribe (() => {
    const state = store.getState()
    console.log(state)
})

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

store.dispatch(createBlogPost({author: "Alex Marston", title:'every clearly', body:"steel brief business wore carefully happily globe another within better well just palace care method great making slope fell favorite mine wire melted camera", comments:['a','b']}))
store.dispatch(createBlogPost({author: "Charlotte Stevens", title:'law officer', body:"plane mud system contrast accurate alone tears grandmother spirit deal tea element fire basic minute get salmon composition peace plates behind chair was arrow"}))
store.dispatch(createBlogPost({author: "Sarah Carroll", title:'plain energy', body:"identity transportation industry sound apart greater little desert held characteristic home later on point relationship spend hall want hundred proud hour straight whole three"}))
store.dispatch(createBlogPost({author: "Emma Stephens", title:'student cutting', body:"cross joy who roof shoe onto remain riding beside lovely cool team forgotten compare feel load while blank all when complete cap pleasure exactly"}))
store.dispatch(createBlogPost({author: "Rosie Potter", title:'fix show', body:"wolf refer stairs silence break proper spent palace possible final poet sail crack several accept before supply raw would mother eight frozen flag toward"}))
store.dispatch(createBlogPost({author: "Hulda Foster", title:'rhyme hole', body:"horse wooden shut comfortable useful till century get air contrast round industrial on fresh electricity obtain breathe valley give know people everybody individual material"}))


ReactDOM.render(jsx, document.getElementById('app'))
