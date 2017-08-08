import * as React from 'react'
import {connect} from 'react-redux'

import {State as WebState} from 'reducers'
import {showFilter} from 'actions/filterActions'
import Filter from 'components/filter/Filter'


interface Props {
    filterButtonScale: number
    showFilter: () => void
}

class FilterContainer extends React.Component<Props, {}> {

    render() {
        const {filterButtonScale, showFilter} = this.props

        return (
            <Filter filterButtonScale={filterButtonScale} showFilter={showFilter} />
        )
    }
}

export default connect((state: WebState) => {
    return {
        filterButtonScale: state.filter.filterButtonScale
    }
}, {showFilter})(Filter)
