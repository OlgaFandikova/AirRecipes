import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const classNames = require('classnames/bind')

import {setFilterButtonScale} from 'actions/filterActions'
import Filter from 'containers/FilterContainer'
import Search from './components/Search'

const cx = classNames.bind(require('./style/header.scss'))


interface Props {
    setFilterButtonScale: (scale: number) => void
}

interface State {
    headerHeight: number
    inputFocusStyle: string
    overlayOpacity: number
}

class Header extends React.Component<Props, State> {

    state = {
        headerHeight: 198,
        inputFocusStyle: 'primary',
        overlayOpacity: 0
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleDocumentScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleDocumentScroll)
    }

    render() {
        const {headerHeight, inputFocusStyle, overlayOpacity} = this.state

        return (
            <div className={cx('wrap')} style={{paddingBottom: headerHeight + 'px'}}>
                <header className={cx('header')}>
                    <div className={cx('container')} style={{height: headerHeight + 'px'}}>
                        <div className={cx('bg-img')} />
                        <div className={cx('bg-orange')} style={{opacity: overlayOpacity}} />
                        <div className="container">
                            <div className="row">
                                <div className="column">
                                    <Link to="/" className={cx('logo')}>AirRecipes</Link>
                                </div>
                                <div className="column flex justify-content-end">
                                    <Search focusStyle={inputFocusStyle} />
                                </div>
                            </div>
                            <h3 className={cx('title')}>Find the best recipes!</h3>
                        </div>
                    </div>
                    <Filter />
                </header>
            </div>
        )
    }

    private handleDocumentScroll = () => {
        const initialHeight = 198
        const minHeight = 64
        const offsetTop = 20

        this.setState({...this.state,
            headerHeight: window.pageYOffset > offsetTop ? minHeight : initialHeight,
            inputFocusStyle: window.pageYOffset > offsetTop ? 'white' : 'primary',
            overlayOpacity: window.pageYOffset > offsetTop ? 1 : 0
        })

        this.props.setFilterButtonScale(window.pageYOffset > offsetTop ? 0.6 : 1)
    }
}

export default connect(null, {setFilterButtonScale})(Header)
