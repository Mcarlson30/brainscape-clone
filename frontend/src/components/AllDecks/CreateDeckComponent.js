import { useState } from 'react';
import { createDeckThunk } from '../../store/decks';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'

function DeckForm() {
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState('');
    const location = useLocation()
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const deck = {
            name,
            userId: sessionUser.id
        }

        dispatch(createDeckThunk(deck));
        setName('')
    }
    return (
        <form onSubmit={handleSubmit} className='add-deck-form'>
            <input
                className='add-deck-input'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Enter deck name' />

            <input type='submit' value='Add' className='add-deck-button' />
        </form>
    )
}

export default DeckForm;