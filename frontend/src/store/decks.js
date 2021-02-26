import { csrfFetch } from './csrf'

const GET_DECKS = 'decks/GET_DECKS'
const ADD_DECK = 'decks/ADD_DECK'

export const getDecks = (decksObj) => ({
    type: GET_DECKS,
    payload: decksObj,
});

export const getCategory = (decksObj) => ({
    type: GET_DECKS,
    payload: decksObj,
});

export const addDeck = (deck) => ({
    type: ADD_DECK,
    payload: deck
})

export const getDecksThunk = () => async (dispatch) => {
    const res = await fetch('/api/decks');
    if (!res.ok) throw res;
    const list = await res.json()
    console.log("getDeckThunk", list)
    dispatch(getDecks(list))

    return list;
}

export const getCategoryThunk = () => async (dispatch) => {
    const res = await fetch('/api/decks/category');
    if (!res.ok) throw res;
    const categoryList = await res.json()
    console.log("getDeckThunk", categoryList)
    dispatch(getDecks(categoryList))

    return categoryList;
}

export const createDeckThunk = (deck) => async (dispatch) => {
    const response = await csrfFetch('/api/decks', {
        method: 'POST',
        body: JSON.stringify(deck)
    });
    const data = await response.json();
    dispatch(addDeck(data.deck));
    return data;
}

const initialState = {
    deckList: {}
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
        case ADD_DECK:
            newState = Object.assign({}, state)
            newState.deckList[action.payload.id] = action.payload;
            return newState;

        default:
            return state;
    }
}

export default deckReducer;
