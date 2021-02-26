import { useState } from 'react';
import { addDeck } from '../../store/decks';
import { useSelector, useDispatch } from 'react-redux';

function SearchForm() {
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const deck = {
            name,
            userId: sessionUser.id
        }

        dispatch(addDeck(deck));
        setName('')
    }
    return (
        <form onSubmit={handleSubmit} className='add-deck-form'>
            <input
                className='add-deck-input'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Search Name' />

            <input type='submit' value='Search' className='add-deck-button' />
        </form>
    )
}

export default SearchForm;