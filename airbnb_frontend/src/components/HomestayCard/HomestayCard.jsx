import React from 'react'

const HomestayCard = () => {
  return (
    <div className={classNames(cx('card'))}>
        <div className={classNames(cx('card-container'))}>
            <button className={classNames(cx('preview-button'))}></button>
            <div className={classNames(cx('preview'))}>
                <div className={classNames(cx('preview-image'))}>
                  <div className={classNames(cx('image'))}>
                    <div className={classNames(cx('image-container'))}>
                        <img src="../../assets/images/no_image.jpg"/>
                    </div>
                    </div>
                </div>
                <div className={classNames(cx('preview-contain'))}>
                    <div className={classNames(cx('preview-left'))}>
                    <div className={classNames(cx('preview-title'))}>test</div>
                    <div className={classNames(cx('preview-price'))}>
                        {homestayData?.defaultPrice && (
                        <>
                            <div className={cx('preview-price-old')}>{homestayData.oldPrice ? `${homestayData.oldPrice}$` : null}</div>
                            <div className={cx('preview-price-new')}>
                            <b>{`${homestayData.defaultPrice}$`}</b> / night
                            </div>
                        </>
                        )}
                    </div>
                    </div>
                <div className={classNames(cx('preview-right'))}>
                    <div className={classNames(cx('tag'))}>New</div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomestayCard
