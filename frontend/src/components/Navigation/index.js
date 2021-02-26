import React from 'react';
import { NavLink, NavMenu } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
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
                <div className='login'>
                    <LoginFormModal />
                </div>
                <div className='signup'>
                    <SignupFormModal />
                </div>
            </>
        );
    }

    return (
        <div className='navbar'>
            <div className='navbar-logo-container'>
                <div className='home-logo'>
                    <div className='logo'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8pKoosSkAmixoC97yyNUeA8ruA7gw3Vlpw&usqp=CAU'></img>
                    </div>
                    <NavLink className='home-link' exact to="/">WizzQuiz</NavLink>
                </div>
            </div>
            <div className='navbar-links'>
                <div className='my-decks'>
                    <NavLink className='search-link' to='/decks/user'>My Decks</NavLink>
                </div>
                <div className='search-decks'>
                    <NavLink className='search-link' to='/decks'>Search Decks</NavLink>
                </div>
            </div>
            <div className='session-links'>
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;