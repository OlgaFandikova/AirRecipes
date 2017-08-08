import * as React from 'react'

const classNames = require('classnames/bind')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

import {colors, fonts} from 'common/style'

const cx = classNames.bind(require('./style/search.scss'))


interface Props {
    focusStyle: string
    isShowMobileSearchForm: boolean
    searchChange: (event: {target: {value: string}}) => void
    showMobileSearchForm: () => void
    hideMobileSearchForm: () => void
}

export default class Search extends React.Component<Props, {}> {

    render() {
        const {isShowMobileSearchForm, showMobileSearchForm, hideMobileSearchForm, searchChange} = this.props
        const focusStyles = (textFieldFocusStyles as any)[this.props.focusStyle]

        return (
            <div className={cx('text-field')}>
                <i className={cx('icon-search')} onClick={showMobileSearchForm} />
                <div className={cx('input')}>
                    <MuiThemeProvider>
                        <TextField id="search" floatingLabelText="Search" onChange={searchChange} {...textFieldStyles} {...focusStyles} />
                    </MuiThemeProvider>
                </div>
                <div className={cx('mobile-search', {'open': isShowMobileSearchForm})}>
                    <i className={cx('icon-close')} onClick={hideMobileSearchForm} />
                    <input type="text" placeholder="Search" className={cx('mobile-input')} onChange={searchChange} />
                </div>
            </div>
        )
    }
}

const textFieldStyles = {
    style: {
        width: 146,
    },
    inputStyle: {
        color: colors.white,
        fontFamily: fonts.roboto,
        paddingLeft: 9
    },
    floatingLabelStyle: {
        top: 36,
        left: 9,
        color: colors.white
    },
    floatingLabelFocusStyle: {
        top: 46
    },
    floatingLabelShrinkStyle: {
        top: 46
    }
}

const textFieldFocusStyles = {
    white: {
        underlineFocusStyle: {
            borderColor: colors.white
        },
        floatingLabelFocusStyle: {
            color: colors.white
        }
    },
    primary: {
        underlineFocusStyle: {
            borderColor: colors.primary
        },
        floatingLabelFocusStyle: {
            color: colors.primary
        }
    }
}
