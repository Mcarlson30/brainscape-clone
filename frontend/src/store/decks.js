import { csrfFetch } from './csrf'

const GET_DECKS = 'decks/GET_DECKS'
const ADD_DECK = 'decks/ADD_DECK'
const GET_CARDS = 'decks/GET_CARDS'
const ADD_CARD = 'decks/ADD_CARD'

export const getDecks = (decksObj) => ({
    type: GET_DECKS,
    payload: decksObj,
});

export const getCards = (cardsObj) => ({
    type: GET_CARDS,
    payload: cardsObj,
});

export const addDeck = ({ deck }) => {
    console.log(deck)
    return {
        type: ADD_DECK,
        payload: deck
    }
}
export const addCard = ({ card }) => {
    return {
        type: ADD_CARD,
        payload: card
    }
}

export const getDecksThunk = (user) => async (dispatch) => {
    const res = await fetch(`/api/decks/${user.id}`);
    if (!res.ok) throw res;
    const list = await res.json()
    dispatch(getDecks(list))

    return list;
}

export const getUserDecksThunk = (user) => async (dispatch) => {
    const res = await fetch(`/api/decks/user/${user.id}`);
    if (!res.ok) throw res;
    const list = await res.json()
    dispatch(getDecks(list))

    return list;
}

export const getCardsThunk = (deckId) => async (dispatch) => {
    console.log('getcardsThunk', deckId)
    const res = await fetch(`/api/cards/${deckId}`);
    if (!res.ok) throw res;
    const list = await res.json()
    dispatch(getCards(list))

    return list;
}

export const createDeckThunk = (deck) => async (dispatch) => {
    try {
        const response = await csrfFetch('/api/decks', {
            method: 'POST',
            body: JSON.stringify(deck)
        });
        dispatch(addDeck(response.data));
        return response.data;
    }
    catch (e) {
        console.error(e);
    }
}

export const createCardThunk = (card) => async (dispatch) => {
    try {
        const response = await csrfFetch('/api/cards', {
            method: 'POST',
            body: JSON.stringify(card)
        });
        dispatch(addDeck(response.data));
        return response.data;
    }
    catch (e) {
        console.error(e);
    }
}

const initialState = {
    deckList: {},
    cardList: {}
}

const decksArray = (decksList) => {
    const newDecksObject = {};
    decksList.forEach((deck) => {
        newDecksObject[deck.id] = deck;
    });
    return newDecksObject;
}

const deckReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case GET_DECKS:
            return {
                ...state,
                deckList: decksArray(action.payload),
            }
        case GET_CARDS:
            return {
                ...state,
                cardList: decksArray(action.payload),
            }
        case ADD_DECK:
            newState = Object.assign({}, state)
            newState.deckList[action.payload.id] = action.payload;
            return newState;
        case ADD_CARD:
            newState = Object.assign({}, state)
            newState.cardList[action.payload.id] = action.payload;
            return newState;

        default:
            return state;
    }
}

export default deckReducer;
