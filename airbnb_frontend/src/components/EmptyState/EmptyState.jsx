import React from 'react'
import styles from './EmptyState.module.scss'
import classNames from 'classnames/bind'
import Heading from '../Heading/Heading'
import Button from '../Button/button'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

const EmptyState = ( {title = "No exact matches", subtitle = "Try changing your filters", showReset} ) => {
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            <div className='reset-button-container'>
                {showReset && (
                    <Button
                        outline
                        label={"Remove filters"}
                        onClick={() => { navigate("/")}}
                    />
                )}

            </div>
        </div>
  )
}

export default EmptyState
