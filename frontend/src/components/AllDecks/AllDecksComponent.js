import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDecksThunk } from '../../store/decks';
import IndividualDeck from "./IndividualDeck";
import './AllDecks.css'
import SearchForm from './SearchDecksComponent';

const GetAllDecks = () => {
    const sessionUser = useSelector(state => state.session.user);
    const decks = useSelector(state => state.decks.deckList)
    const dispatch = useDispatch();

    useEffect(() => {

        const getAllDecks = async () => {
            console.log('inside getAllDecks')
            try {
                const decks = await dispatch(getDecksThunk(sessionUser))
                console.log(decks)
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
                {Object.values(decks).map((deck) => {
                    return (
                        <IndividualDeck key={deck.id} deck={deck}>

                        </IndividualDeck>
                    )
                })}

            </div>
        </div>
    );
};
export default GetAllDecks;