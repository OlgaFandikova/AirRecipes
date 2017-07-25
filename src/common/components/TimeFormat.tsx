import * as React from 'react'

const moment = require('moment')


interface Props {
    seconds: number
}

export default class TimeFormat extends React.Component<Props, {}> {

    render() {
        const {seconds} = this.props
        const time = moment.duration(seconds, 'seconds')

        return (
            <span>
                {!!time.hours() && <span>{time.hours()} hr </span>}
                {!!time.minutes() && <span>{time.minutes()} min </span>}
                {!!time.seconds() && <span>{time.seconds()} sec </span>}
            </span>
        )
    }
}