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
        <div className="
                h-[60vh]
                flex
                flex-col
                gap-2
                justify-center
                items-center
            "
        >
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            <div className='w-48 mt-4'>
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
