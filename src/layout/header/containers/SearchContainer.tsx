import * as React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import {debounce} from 'lodash'

import {store} from 'store'
import {Recipe} from 'actions/recipesActions'
import {setFilteredRecipes, resetFilter} from 'actions/filterActions'
import {State as WebState} from 'reducers'
import Search from '../components/Search'


interface Props {
    searchFocusStyle: string
    recipes: Recipe[]
    setFilteredRecipes: (recipes: Recipe[]) => void
    resetFilter: () => void
}

interface State {
    isShowMobileSearchForm: boolean
}

class SearchContainer extends React.Component<Props, State> {

    state = {
        isShowMobileSearchForm: false
    }

    render() {
        return (
            <Search
                focusStyle={this.props.searchFocusStyle}
                isShowMobileSearchForm={this.state.isShowMobileSearchForm}
                searchChange={this.handleSearchChange}
                showMobileSearchForm={this.handleShowMobileSearchForm}
                hideMobileSearchForm={this.handleHideMobileSearchForm}
            />
        )
    }

    private handleShowMobileSearchForm = () => {
        this.setState({...this.state,
            isShowMobileSearchForm: true
        })
    }

    private handleHideMobileSearchForm = () => {
        this.setState({...this.state,
            isShowMobileSearchForm: false
        })
    }

    private handleSearchChange = (event: {target: {value: string}, persist: () => void}) => {
        event.persist()

        this.handleSearch(event)
    }

    private handleSearch = debounce((event: {target: {value: string}}) => {
        const {recipes, setFilteredRecipes} = this.props
        let filteredRecipes = [] as Recipe[]

        recipes.map((recipe: Recipe) => {
            if (
                recipe.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1 ||
                recipe.cuisine.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1 ||
                recipe.description.toLowerCase().search(event.target.value.toLowerCase()) !== -1
            ) {
                filteredRecipes.push(recipe)
            }
        })

        setFilteredRecipes(filteredRecipes)
        store.dispatch(push('/'))
    }, 300)
}

export default connect((state: WebState) => {
    return {
        recipes: state.recipes.recipesList,
        searchFocusStyle: state.filter.searchFocusStyle
    }
}, {setFilteredRecipes, resetFilter})(SearchContainer)
