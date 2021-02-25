import { useEffect, useState } from "react";
import IndividualDeck from "./IndividualDeck";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getDecksThunk } from '../../store/decks';
import "./AllDecks.css";

const AllDecks = () => {
    const { deckId } = useParams();
    const decks = useSelector((state) => state.decks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDecksThunk())
    }, [dispatch])

    if (!decks) return

    return (
        <div className='browse-decks'>
            <div className='left-sidebar'>
                <div className='search-bar'>
                    Categories
                </div>
            </div>
            <div className='deck-display'>
                <div className='search-title'>
                    <h1>Browse decks</h1>
                </div>
                <div className='deck-links'>
                    {console.log('decks', decks)}
                    {decks && decks.deckList.map((deck) => {
                        return (
                            <IndividualDeck key={deck.id} deck={deck}>

                            </IndividualDeck>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
export default AllDecks;