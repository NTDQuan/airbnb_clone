import React, { useCallback, useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './Modal.module.scss'

import { IoMdClose } from 'react-icons/io'
import Button from '../Button/button';

const cx = classNames.bind(styles)

const Modal = ({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled, secondaryAction, secondaryActionLabel }) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if(disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    {/* CONTENT */}
                    <div className={cx('content', { showModal : showModal })}>
                        <div className={cx('modal')}>
                            {/* HEADER */}
                            <div className={cx('header')}>
                                <button className={cx('close-button')} onClose={handleClose}>
                                    <IoMdClose size={18}/>
                                </button>
                                <div className={cx('title')}>
                                    {title}
                                </div>
                            </div>
                            {/* BODY */}
                            <div className={cx('body')}>
                                {body}
                            </div>
                            {/* FOOTER */}
                            <div className={cx('footer')}>
                                <div className={cx('footer-container')}>
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button 
                                            outline
                                            disabled={disabled}
                                            label={secondaryActionLabel}
                                            onClick={handleSecondaryAction}
                                        />
                                    )}
                                    <Button 
                                        label = {actionLabel}
                                        disabled = {disabled}
                                        onClick={handleSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.element,
    footer: PropTypes.element,
    actionLabel: PropTypes.string,
    disabled: PropTypes.bool,
    secondaryAction: PropTypes.func,
    secondaryActionLabel: PropTypes.string
}


export default Modal
