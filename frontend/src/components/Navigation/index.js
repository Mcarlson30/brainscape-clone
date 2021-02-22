import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <div className='navbar'>
            <div className='nabvabr-logo-container'>
                <div className='navbar-logo'></div>
            </div>
            <div classname='navbar-items'>
                <div classname='navbar-item-search-flashcards'><NavLink exact to="/">Home</NavLink></div>
            </div>
            <div classname='navbar-items'>
                <div classname='navbar-item-make-flashcards'>Make Flashcards</div>
            </div>
            <div classname='navbar-items'>
                <div classname='navbar-item-how-it-works'>How does it Work?</div>
            </div>
            <div classname='navbar-items'>
                <div classname='navbar-item-search-flashcards'>Search Flashcards</div>
            </div>
            <li>

                {isLoaded && sessionLinks}
            </li>
        </div>
    );
}

export default Navigation;