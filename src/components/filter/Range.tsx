import * as React from 'react'

const classNames = require('classnames/bind')
const InputRange = require( 'react-input-range')

const cx = classNames.bind(require('./style/range.scss'))
import 'react-input-range/lib/css/index.css'


interface Props {
    title: string
    maxValue: number
    minValue: number
    values: {
        min: number
        max: number
    }
    step: number
    onChange: (values: {min: number, max: number}) => void
}

export default class Range extends React.Component<Props, {}> {

    render() {
        const {title, maxValue, minValue, values, step, onChange} = this.props

        return (
            <div className={cx('wrap')}>
                <h4 className={cx('title')}>{title}</h4>
                <div className={cx('values')}>{this.props.children}</div>
                <InputRange maxValue={maxValue} minValue={minValue} value={values} onChange={onChange} step={step} />
            </div>
        )
    }
}