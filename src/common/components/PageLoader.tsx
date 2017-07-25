import * as React from 'react'

const classNames = require('classnames/bind')

const cx = classNames.bind(require('./style/pageLoader.scss'))


interface State {
    isActiveLoader: boolean
}

export default class PageLoader extends React.Component<{}, State> {

    state = {
        isActiveLoader: true
    }

    componentWillMount() {
        window.addEventListener('load', this.handleHideLoader, true)
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleHideLoader, true)
    }

    render() {
        return (
            <div style={{...loaderStyle,
                            position: 'fixed',
                            opacity: this.state.isActiveLoader ? 1 : 0,
                            visibility: this.state.isActiveLoader ? 'visibility' : 'hidden'
                        }}>
                <div className={cx('circle', 'circle-1')}></div>
                <div className={cx('circle', 'circle-2')}></div>
                <div className={cx('circle', 'circle-3')}></div>
                <div className={cx('circle', 'circle-4')}></div>
            </div>
        )
    }

    private handleHideLoader = () => {
        this.setState({...this.state,
            isActiveLoader: false
        })
    }
}

const loaderStyle = {
    zIndex: 2000,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#fff',
    transition: '0.2s'
}
