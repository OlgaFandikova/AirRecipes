import * as React from 'react'

const classNames = require('classnames/bind')
const Collapse = require('react-collapse').Collapse
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Checkbox from 'material-ui/Checkbox'

import {fonts, colors} from 'common/style'
import {Cuisines} from 'containers/FilterPanelContainer'

const cx = classNames.bind(require('./style/checkList.scss'))


interface Props {
    options: Cuisines
    onCheck: (option: string, checked: boolean) => void
}

interface State {
    isOpened: boolean
}

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: colors.primary
    }
})

export default class CheckList extends React.Component<Props, State> {

    state = {
        isOpened: true
    }

    render() {
        const {options, onCheck} = this.props
        const {isOpened} = this.state

        return (
            <div className="mb-20">
                <div className={cx('head')} onClick={this.toggleCollapse}>
                    Cuisine<i className={cx('icon-arrow', {'down': !isOpened})} />
                </div>
                <Collapse isOpened={isOpened} className={cx('collapse')}>
                    <div className={cx('list')}>
                        {Object.keys(options).map((option: string, index: number) => (
                            <MuiThemeProvider muiTheme={muiTheme} key={index}>
                                <Checkbox label={option} checked={(options as any)[option]}
                                          className={cx('checkbox')} {...checkboxStyle}
                                          onCheck={() => onCheck(option, (options as any)[option])} />
                            </MuiThemeProvider>
                        ))}
                    </div>
                </Collapse>
            </div>
        )
    }

    private toggleCollapse = () => {
        this.setState({...this.state,
            isOpened: !this.state.isOpened
        })
    }
}

const checkboxStyle = {
    labelStyle: {
        fontFamily: fonts.lato,
        color: '#808080',
        fontSize: 16
    }
}