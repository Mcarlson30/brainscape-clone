import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCardsThunk } from '../../store/decks';
import IndividualCard from "./IndividualDeck";
import './AllDecks.css'
import SearchForm from './SearchDecksComponent';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const GetAllCards = () => {
    const location = useLocation()
    const cards = useSelector(state => state.decks.cardList)
    const deckId = location.deckProp.deckId
    const deckName = location.deckProp.deckName
    const dispatch = useDispatch();
    console.log('deckId', deckId)
    console.log('deckName', deckName)

    useEffect(() => {

        const getAllCards = async () => {
            console.log('inside try')
            try {
                const cards = await dispatch(getCardsThunk(deckId))
                console.log(cards)
            }
            catch (e) {
                console.log(e)
            }
        }
        getAllCards();
    }, [dispatch, deckId])

    return (
        <div className='browse-decks'>
            <div className='left-sidebar'>
                <div className='search-bar'>
                    Add Cards
                </div>
                <div className='deck-form'>
                    <SearchForm />
                </div>

            </div>
            <div className='deck-display'>
                <div className='search-title'>
                    {`${deckName} Cards`}
                </div>
                {Object.values(cards).map((card) => {
                    return (
                        <div className='IndividualDeckComponent'>
                            <NavLink
                                className="single-deck-link"
                                to={{
                                    pathname: `/cards`,
                                    deckProp: { deckId: card.id }
                                }}
                            >
                                Question: {card.question}?&#10;
                                Answer: {card.answer}
                            </NavLink>
                        </div >
                    )
                })}

            </div>
        </div>
    );
};
export default GetAllCards;