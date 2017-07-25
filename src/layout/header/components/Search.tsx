import * as React from 'react'

const classNames = require('classnames/bind')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

import {colors, fonts} from 'common/style'

const cx = classNames.bind(require('./style/search.scss'))


interface Props {
    focusStyle: string
}

interface State {
    isShowMobileSearchForm: boolean
}

export default class Search extends React.Component<Props, State> {

    state = {
        isShowMobileSearchForm: false
    }

    render() {
        const {isShowMobileSearchForm} = this.state
        const focusStyles = (textFieldFocusStyles as any)[this.props.focusStyle]

        return (
            <div className={cx('text-field')}>
                <i className={cx('icon-search')} onClick={this.showMobileSearchForm} />
                <div className={cx('input')}>
                    <MuiThemeProvider>
                        <TextField id="search" floatingLabelText="Search" {...textFieldStyles} {...focusStyles} />
                    </MuiThemeProvider>
                </div>
                <div className={cx('mobile-search', {'open': isShowMobileSearchForm})}>
                    <i className={cx('icon-close')} onClick={this.hideMobileSearchForm} />
                    <input type="text" placeholder="Search" className={cx('mobile-input')} />
                </div>
            </div>
        )
    }

    private showMobileSearchForm = () => {
        this.setState({...this.state,
            isShowMobileSearchForm: true
        })
    }

    private hideMobileSearchForm = () => {
        this.setState({...this.state,
            isShowMobileSearchForm: false
        })
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
