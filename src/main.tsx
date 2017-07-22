import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'

import createBrowserHistory from 'history/createBrowserHistory'

import App from './App'


const history = createBrowserHistory()

class Content extends React.Component<{}, {}> {

    render() {
        return (
            <Router history={history}>
                <Route path="/" component={App} />
            </Router>
        )
    }
}

ReactDOM.render(
    <Content />,
    document.getElementById('content')
)
