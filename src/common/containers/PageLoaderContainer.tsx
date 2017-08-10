import * as React from 'react'
import {connect} from 'react-redux'

import {State as WebState} from 'reducers'
import PageLoader from '../components/PageLoader'


interface Props {
    isActiveLoader: boolean
}

interface State {
    isWindowLoading: boolean
}

class PageLoaderContainer extends React.Component<Props, State> {

    state = {
        isWindowLoading: true
    }

    componentWillMount() {
        window.addEventListener('load', this.handleEndWindowLoad, true)
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleEndWindowLoad, true)
    }

    render() {
        return (
            <PageLoader isActiveLoader={this.props.isActiveLoader || this.state.isWindowLoading} />
        )
    }

    private handleEndWindowLoad = () => {
        this.setState({...this.state,
            isWindowLoading: false
        })
    }
}

export default connect((state: WebState) => {
    return {
        isActiveLoader: state.pageLoader.isActiveLoader
    }
})(PageLoaderContainer)
