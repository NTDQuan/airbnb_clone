import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types';
import styles from './ListTableElement.module.scss'

import no_image from '../../assets/image/no_image.jpg'
import { ReactComponent as Go_to_icon} from '../../assets/image/go_to_icon.svg'

const cx = classNames.bind(styles)

const ListTableElement = ({image, list, location, status}) => {
    return (
        <tr>
            <td>
                <div className={cx('list-cell')}>
                    <div className={cx('list-image')}>
                        <div className={cx('list-image-container')}>
                            {image ? (
                                <img src={image} alt="" />
                            ) : (
                                <img src={no_image} alt="No Image Available"/>
                            )}
                        </div>
                    </div>
                    <div className={cx('list-info')}>
                        {list}
                    </div>
                </div>
            </td>
            <td>
                <div className={cx('location-cell')}>
                    <p className={cx('location-text')}>{location}</p>
                </div>
            </td>
            <td>
                <div className={cx('status-cell')}>
                    <div>
                        {/* TODO: add status circle latter */}
                    </div>
                    <span>{status}</span>
                </div>
            </td>
            <td>
                <div className={cx('button-cell')}>
                    <Go_to_icon/>
                </div>
            </td>
        </tr>
    )
}

export default ListTableElement
