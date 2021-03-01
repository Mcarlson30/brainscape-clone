import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';
import './LoginForm.css'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    const handleClick = () => {
        history.push('');
        setShowModal(false)
    }

    return (
        <>
            <button className='log-button' onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={handleClick}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;