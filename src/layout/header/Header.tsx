import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const classNames = require('classnames/bind')
import {TimelineMax} from 'gsap'

import {setFilterButtonScale} from 'actions/filterActions'
import Filter from 'containers/FilterContainer'
import Search from './components/Search'

const cx = classNames.bind(require('./style/header.scss'))


interface Props {
    setFilterButtonScale: (scale: number) => void
}

interface State {
    inputFocusStyle: string
}

class Header extends React.Component<Props, State> {

    state = {
        inputFocusStyle: 'primary'
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleDocumentScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleDocumentScroll)
    }

    render() {
        return (
            <div>
                <header className={cx('header')}>
                    <div className={cx('container')} ref="header">
                        <div className={cx('bg-img')} />
                        <div className={cx('bg-orange')} ref="overlay" />
                        <div className="container">
                            <div className="row">
                                <div className="column">
                                    <Link to="/" className={cx('logo')}>AirRecipes</Link>
                                </div>
                                <div className="column flex justify-content-end">
                                    <Search focusStyle={this.state.inputFocusStyle} />
                                </div>
                            </div>
                            <h3 className={cx('title')}>Find the best recipes!</h3>
                        </div>
                    </div>
                    <Filter />
                </header>
                <div ref="hiddenBlock" className={cx('hidden-block')} />
            </div>
        )
    }

    private handleDocumentScroll = () => {
        const tl = new TimelineMax()
        const initialHeight = 198
        const minHeight = 64
        let height, opacity

        if (initialHeight - window.pageYOffset > minHeight && window.pageYOffset != 0) {
            height = initialHeight - window.pageYOffset
            opacity = minHeight / height
        } else if (initialHeight - window.pageYOffset <= minHeight) {
            height = minHeight
            opacity = 1
        } else {
            height = initialHeight
            opacity = 0
        }

        tl.to([ReactDOM.findDOMNode(this.refs.header), ReactDOM.findDOMNode(this.refs.hiddenBlock)], .2, {
            height: height
        })

        tl.to(ReactDOM.findDOMNode(this.refs.overlay), .2, {
            opacity: opacity
        },'-=2')

        this.setState({...this.state,
            inputFocusStyle: opacity ? 'white' : 'primary'
        })

        this.props.setFilterButtonScale(opacity < 0.8 ? 1 - opacity / 2 : 0.6)
    }
}

export default connect(null, {setFilterButtonScale})(Header)
