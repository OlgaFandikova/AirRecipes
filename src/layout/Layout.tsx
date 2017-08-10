import * as React from 'react'

import PageLoader from 'common/containers/PageLoaderContainer'
import Header from './header/Header'

import './style/layout.scss'


export default class Layout extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <PageLoader />
                <Header />
                <div className="container pt-md-30 pt-lg-30 pb-mg-30 pb-lg-30">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
