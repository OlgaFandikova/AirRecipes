import * as React from 'react'
import {connect} from 'react-redux'

import {Recipe} from 'actions/recipesActions'
import {setFilteredRecipes, hideFilter, resetFilter} from 'actions/filterActions'
import FilterPanel from 'components/filter/FilterPanel'
import {State as WebState} from 'reducers'


export interface Cuisines {
    chinese: boolean
    caribbean: boolean
    french: boolean
    greek: boolean
    indian: boolean
}

export interface RangeValues {
    min: number
    max: number
}

export interface State {
    cuisines: Cuisines
    calories: RangeValues
    cookingTime: RangeValues
}

interface Props {
    isShowFilter: boolean
    recipesList?: Recipe[]
    filteredRecipesList?: Recipe[]
    setFilteredRecipes?: (recipes: Recipe[]) => void
    hideFilter?: () => void
    resetFilter?: () => void
}

const initialFilterState = {
    cuisines: {
        chinese: false,
        caribbean: false,
        french: false,
        greek: false,
        indian: false,
    },
    calories: {
        min: 0,
        max: 3000
    },
    cookingTime: {
        min: 120,
        max: 9000
    }
}

class FilterPanelContainer extends React.Component<any, State> {

    state = initialFilterState

    render() {
        return (
            <FilterPanel
                {...this.state}
                {...this.props}
                setFilter={this.handleSetFilter}
                clearFilter={this.handleClearFilter}
                checkCuisine={this.handleCheckCuisine}
                changeCalories={this.handleChangeCalories}
                changeCookingTime={this.handleChangeCookingTime}
            />
        )
    }

    private handleCheckCuisine = (option: string, checked: boolean) => {
        this.setState({...this.state,
            cuisines: {...this.state.cuisines,
                [option]: !checked
            }
        })
    }

    private handleChangeCalories = (values: {min: number, max: number}) => {
        this.setState({...this.state,
            calories: values
        })
    }

    private handleChangeCookingTime = (values: {min: number, max: number}) => {
        this.setState({...this.state,
            cookingTime: values
        })
    }

    private handleClearFilter = () => {
        this.setState({...this.state, ...initialFilterState})
        this.props.resetFilter()
    }

    private handleSetFilter = () => {
        const {recipes, setFilteredRecipes, hideFilter} = this.props
        const {cuisines, calories} = this.state
        let checkedCuisinesLength = 0

        Object.keys(cuisines).map((cuisine: string) => {
            if (!((cuisines as any)[cuisine])) {
                checkedCuisinesLength++
            }
        })

        const filteredRecipes = recipes.filter((recipe: Recipe) => {
            return ((cuisines as any)[recipe.cuisine.title.toLocaleLowerCase()] ||
                checkedCuisinesLength == Object.keys(cuisines).length) &&
                recipe.caloricity >= calories.min &&
                recipe.caloricity <= calories.max
        })

        hideFilter()
        setFilteredRecipes(filteredRecipes)
    }
}

export default connect((state: WebState) => {
    return {
        recipes: state.recipes.recipesList,
        isShowFilter: state.filter.isShowFilter,
        filteredRecipes: state.filter.filteredRecipesList
    }
}, {setFilteredRecipes, hideFilter, resetFilter})(FilterPanelContainer)
