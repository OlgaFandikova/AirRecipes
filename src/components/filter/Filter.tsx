import * as React from 'react'

const classNames = require('classnames/bind')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import FilterPanel from 'containers/FilterPanelContainer'

const cx = classNames.bind(require('./style/filter.scss'))


interface Props {
    filterButtonScale: number
    showFilter: () => void
}

export default class Filter extends React.Component<Props, {}> {

    render() {
        const {filterButtonScale, showFilter} = this.props

        return (
            <div className={cx('wrap', 'container')}>
                <div className={cx('block')}>
                    <MuiThemeProvider>
                        <FloatingActionButton
                            className={cx('button')}
                            style={{transform: `scale(${filterButtonScale})`}}
                            onClick={showFilter}
                        >
                            <i className={cx('icon')} />
                        </FloatingActionButton>
                    </MuiThemeProvider>
                    <FilterPanel />
                </div>
            </div>
        )
    }
}
