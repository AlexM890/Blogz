import React from 'react'
import {NavLink} from 'react-router-dom'
import moment from 'moment'

const Header = (props) => (
        <header className="mb-3 d-column">
            <NavLink to="/" className="zero-dawn h1 d-block">BLOGZ</NavLink>
            <NavLink to="/create" className="btn btn-primary">Create Blog Post</NavLink>
        </header>
)


export default Header