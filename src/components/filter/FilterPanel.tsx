import * as React from 'react'

const classNames = require('classnames/bind')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

import TimeFormat from 'common/components/TimeFormat'
import {fonts} from 'common/style'
import {Cuisines, RangeValues} from 'containers/FilterPanelContainer'
import CheckList from './CheckList'
import Range from './Range'

const cx = classNames.bind(require('./style/filterPanel.scss'))


interface Props {
    isShowFilter: boolean
    cuisines: Cuisines
    calories: RangeValues
    cookingTime: RangeValues
    hideFilter: () => void
    setFilter: () => void
    clearFilter: () => void
    checkCuisine: (option: string, checked: boolean) => void
    changeCalories: (values: {min: number, max: number}) => void
    changeCookingTime: (values: {min: number, max: number}) => void
}

export default class FilterPanel extends React.Component<Props, {}> {

    render() {
        const {isShowFilter, hideFilter, setFilter, cuisines, calories, cookingTime, checkCuisine, changeCalories,
               changeCookingTime, clearFilter} = this.props

        return (
            <div>
                <div className={cx('overlay', {'visible': isShowFilter})} onClick={hideFilter} />
                <div className={cx('filter', {'active': isShowFilter})}>
                    <div className={cx('head')}>
                        <button className={cx('button-clear')} onClick={clearFilter}>Clear All</button>
                        <MuiThemeProvider>
                            <RaisedButton label="See recipes" onClick={setFilter} {...buttonStyle} />
                        </MuiThemeProvider>
                    </div>
                    <div className={cx('body')}>
                        <CheckList options={cuisines} onCheck={checkCuisine} />
                        <Range title="Calories Range" maxValue={3000} minValue={0} values={calories} step={10}
                               onChange={changeCalories}>
                            {calories.min} kCal - {calories.max} kCal
                        </Range>
                        <Range title="Cooking Time" maxValue={9000} minValue={120} values={cookingTime} step={60}
                               onChange={changeCookingTime}>
                            <TimeFormat seconds={cookingTime.min} /> - <TimeFormat seconds={cookingTime.max} />
                        </Range>
                    </div>
                </div>
            </div>
        )
    }
}

const buttonStyle = {
    backgroundColor: '#1eaaf1',
    style: {
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.13), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: 4,
        height: 44,
    },
    labelStyle: {
        color: '#fff',
        textTransform: 'none',
        fontFamily: fonts.lato,
        fontSize: 16,
        padding: '0 25px'
    }
}
