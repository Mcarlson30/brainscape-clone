import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import './SignupForm.css'

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button class='signup-button' onClick={() => setShowModal(true)}>Sign up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;