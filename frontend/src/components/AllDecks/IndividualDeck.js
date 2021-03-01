import { NavLink } from "react-router-dom";


const IndividualDeck = ({ deck, user }) => {
    return (
        <div className='IndividualDeckComponent'>
            <NavLink
                className="single-deck-link"
                to={{
                    pathname: `/cards`,
                    deckProp: { deckId: deck.id, deckName: deck.name }
                }}
            >
                {deck.name}
            </NavLink>
        </div >
    );
};

export default IndividualDeck;