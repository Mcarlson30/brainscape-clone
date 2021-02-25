const GET_DECKS = 'decks/GET_DECKS'

export const getDecks = (decksObj) => ({
    type: GET_DECKS,
    payload: decksObj,
});

export const getDecksThunk = () => async (dispatch) => {
    const res = await fetch('/api/decks');
    if (!res.ok) throw res;
    const list = await res.json()
    console.log("getDeckThunk", list)
    dispatch(getDecks(list))

    return list;
}

const initialState = {
    deckList: {}
}

const decksArray = (decksList) => {
    const newDecksObject = {};
    decksList.forEach((deck) => {
        newDecksObject[deck.id] = deck;
    });
    return Object.values(newDecksObject);
}

const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DECKS:
            return {
                ...state,
                deckList: decksArray(action.payload),
            }

        default:
            return state;
    }
}

export default deckReducer;
