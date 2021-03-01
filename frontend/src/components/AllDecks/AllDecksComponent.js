import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDecksThunk } from '../../store/decks';
import IndividualDeck from "./IndividualDeck";
import './AllDecks.css'
import SearchForm from './SearchDecksComponent';

const GetAllDecks = () => {
    let sessionUser = useSelector(state => state.session.user);
    const decks = useSelector(state => state.decks.deckList)
    const dispatch = useDispatch();
    const user = {
        email: 'nouser@nouser.com',
        id: 0
    }
    useEffect(() => {

        const getAllDecks = async () => {
            console.log('inside getAllDecks', sessionUser)
            try {
                if (sessionUser) {
                    const decks = await dispatch(getDecksThunk(sessionUser))
                } else {
                    const decks = await dispatch(getDecksThunk(user))
                }
            }
            catch (e) {
                console.log(e)
            }
        }
        getAllDecks();
    }, [dispatch, sessionUser])

    return (
        <div className='browse-decks'>
            <div className='left-sidebar'>
                <div className='search-bar'>
                    Search Decks
                </div>
                <div className='deck-form'>
                    <SearchForm />
                </div>

            </div>
            <div className='deck-display'>
                <div className='search-title'>
                    {`Explore New Decks`}
                </div>
                <div className='deck-display-component'>
                    {Object.values(decks).map((deck) => {
                        return (
                            <IndividualDeck key={deck.id} deck={deck} user={user}>

                            </IndividualDeck>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
export default GetAllDecks;