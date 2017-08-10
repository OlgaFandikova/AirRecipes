import * as React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import {store} from 'store'
import {Recipe} from 'actions/recipesActions'
import {setFilteredRecipes, hideFilter, resetFilter, changeCalories} from 'actions/filterActions'
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
    cookingTime: RangeValues
}

interface Props {
    calories: RangeValues
    recipes: Recipe[]
    filteredRecipes: Recipe[]
    isShowFilter: boolean
    caloriesRange: RangeValues
    hideFilter: () => void
    resetFilter: () => void
    setFilteredRecipes: (recipes: Recipe[]) => void
    changeCalories: (values: {min: number, max: number}) => void
}

const initialFilterState = {
    cuisines: {
        chinese: false,
        caribbean: false,
        french: false,
        greek: false,
        indian: false,
    },
    cookingTime: {
        min: 2100,
        max: 3000
    }
}

class FilterPanelContainer extends React.Component<Props, State> {

    state = {...initialFilterState}

    render() {
        return (
            <FilterPanel
                {...this.state}
                {...this.props}
                setFilter={this.handleSetFilter}
                clearFilter={this.handleClearFilter}
                checkCuisine={this.handleCheckCuisine}
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

    private handleChangeCookingTime = (values: {min: number, max: number}) => {
        this.setState({...this.state,
            cookingTime: {...this.state.cookingTime, ...values}
        })
    }

    private handleClearFilter = () => {
        this.setState({...this.state, ...initialFilterState})
        this.props.resetFilter()
    }

    private handleSetFilter = () => {
        const {recipes, setFilteredRecipes, hideFilter, calories} = this.props
        const {cuisines} = this.state
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
        store.dispatch(push('/'))
    }
}

export default connect((state: WebState) => {
    return {
        calories: state.filter.calories,
        recipes: state.recipes.recipesList,
        isShowFilter: state.filter.isShowFilter,
        filteredRecipes: state.filter.filteredRecipesList,
        caloriesRange: state.filter.caloriesRange
    }
}, {setFilteredRecipes, hideFilter, resetFilter, changeCalories})(FilterPanelContainer)
