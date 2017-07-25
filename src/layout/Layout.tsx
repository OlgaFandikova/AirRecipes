import * as React from 'react'

import Header from './header/Header'


export default class Layout extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <Header />
                <div className="container pt-md-30 pt-lg-30 pb-mg-30 pb-lg-30">
                    {this.props.children}
                </div>
            </div>
        )
    }
}