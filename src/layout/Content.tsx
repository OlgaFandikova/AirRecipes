import * as React from 'react'

import {TimelineMax} from 'gsap'


export default class Content extends React.Component<{}, {}> {

    componentWillMount() {
        const tl = new TimelineMax()

        tl.to([document.documentElement, document.body], 0, {
            scrollTop: 0
        })
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}