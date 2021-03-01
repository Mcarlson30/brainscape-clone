import { useState } from 'react';
import { createCardThunk } from '../../store/decks';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function CardForm({ deckId }) {
    const history = useHistory()
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const card = {
            question,
            answer,
            deckId: deckId
        }

        dispatch(createCardThunk(card));
        setQuestion('')
        setAnswer("")
    }
    function goBack() {
        history.push('/decks/user')
    }
    return (
        <form onSubmit={handleSubmit} className='add-deck-form'>
            <input
                className='add-deck-input'
                type='textarea'
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder='Enter a question' />
            <input
                className='add-deck-input'
                type='textarea'
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                placeholder='Enter a answer' />

            <input type='submit' value='Add' className='add-deck-button' />
            <div className='go-back-to-decks'>
                <button
                    type='submit'
                    onClick={goBack}
                    className='add-card-button'>Go Back</button>
            </div>
        </form>
    )
}

export default CardForm;