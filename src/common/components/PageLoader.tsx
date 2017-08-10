import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('./style/pageLoader.scss'))


interface Props {
    isActiveLoader: boolean
}

export default class PageLoader extends React.Component<Props, {}> {

    render() {
        return (
            <div style={{...loaderStyle,
                            position: 'fixed',
                            opacity: this.props.isActiveLoader ? 1 : 0,
                            visibility: this.props.isActiveLoader ? 'visible' : 'hidden'
                        }}>
                <div className={cx('circle', 'circle-1')} />
                <div className={cx('circle', 'circle-2')} />
                <div className={cx('circle', 'circle-3')} />
                <div className={cx('circle', 'circle-4')} />
            </div>
        )
    }
}

const loaderStyle = {
    zIndex: 2000,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#fff',
    transition: '.2s'
}
