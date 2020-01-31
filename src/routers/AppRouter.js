import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import Create from "../components/Create"
import Header from '../components/Header'
import Edit from '../components/Edit'
import Display from '../components/Display'

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path='/display/:id' component={Display} exact={true} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/Create" component={Create} />
            <Route component={NotFound}/>
        </Switch>
    </div>   
    </BrowserRouter>
)

export default AppRouter