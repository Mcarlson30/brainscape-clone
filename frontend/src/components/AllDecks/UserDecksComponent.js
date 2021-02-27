import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDecksThunk } from '../../store/decks';
import IndividualDeck from "./IndividualDeck";
import DeckForm from './CreateDeckComponent'
import './AllDecks.css'

const GetUserDecks = () => {
    const sessionUser = useSelector(state => state.session.user);
    const decks = useSelector(state => state.decks.deckList)
    const dispatch = useDispatch();

    useEffect(() => {

        const getAllDecks = async () => {
            console.log('inside getUserDecks')
            try {
                const decks = await dispatch(getUserDecksThunk(sessionUser))
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
                    Add New Deck
                </div>
                <div className='deck-form'>
                    <DeckForm />
                </div>

            </div>
            <div className='deck-display'>
                {sessionUser &&
                    <div className='search-title'>
                        {`${sessionUser.username}'s Decks`}
                    </div>

                }
                {Object.values(decks).map((deck) => {
                    return (
                        <IndividualDeck key={deck.id} deck={deck} user={sessionUser}>

                        </IndividualDeck>
                    )
                })}

            </div>
        </div>
    );
};
export default GetUserDecks;