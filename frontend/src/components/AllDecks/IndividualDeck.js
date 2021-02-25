import { NavLink } from "react-router-dom";

const IndividualDeck = ({ deck }) => {
    return (
        <div className='IndividualDeckComponent'>
            <NavLink
                className="single-deck-link"
                to={`/decks/${deck.id}`}
            >
                {deck.name}
            </NavLink>
        </div>
    );
};

export default IndividualDeck;