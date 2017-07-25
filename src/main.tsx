import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Router} from 'react-router'

const injectTapEventPlugin = require('react-tap-event-plugin')

import RecipesList from './containers/RecipesListContainer'
import Recipe from './recipe/containers/RecipeContainer'
import Layout from './layout/Layout'
import {store, history} from './store'

import 'animate.css/animate.css'
import 'common/style/base.scss'


injectTapEventPlugin()

export default class Content extends React.Component<{}, {}> {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Layout>
                        <Route exact path="/" component={RecipesList} />
                        <Route path="/recipe-:id" component={Recipe} />
                    </Layout>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(
    <Content />,
    document.getElementById('content')
)
