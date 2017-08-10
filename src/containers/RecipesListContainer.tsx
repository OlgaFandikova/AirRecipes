import * as React from 'react'
import {connect} from 'react-redux'

import axios from 'axios'

import {State} from 'reducers'
import {showPageLoader} from 'common/actions/pageLoaderActions'
import {setAllRecipes, Recipe} from 'actions/recipesActions'
import {setCaloriesRange} from 'actions/filterActions'
import Content from 'layout/Content'
import Card from '../components/card/Card'


interface Props {
    isSetFilter: boolean
    recipes: Recipe[]
    filteredRecipes: Recipe[]
    showPageLoader: () => void
    setAllRecipes: (recipes: Recipe[]) => void
    setCaloriesRange: (values: {min: number, max: number}) => void
}

class RecipesListContainer extends React.Component<Props, {}> {

    componentWillMount() {
       axios.get('https://test.space-o.ru/list.json').then((response) => {
            const recipes = [...response.data.recipes]
            let caloriesRange = {
                min: recipes[0].caloricity,
                max: recipes[0].caloricity
            }

            recipes.map((recipe: Recipe) => {
                if (recipe.caloricity < caloriesRange.min) {
                    caloriesRange.min = recipe.caloricity
                }
                if (recipe.caloricity > caloriesRange.max) {
                    caloriesRange.max = recipe.caloricity
                }
            })

            this.props.setAllRecipes(recipes)
            this.props.setCaloriesRange(caloriesRange)
        })
    }

    render() {
        const {recipes, filteredRecipes, isSetFilter, showPageLoader} = this.props
        const recipesList = isSetFilter ? filteredRecipes : recipes

        return (
            <Content>
                <div className="row mt-md-40 mt-lg-40">
                    {isSetFilter && !filteredRecipes.length &&
                        <div>No filtered results</div>
                    }
                    {recipesList.map((recipe: Recipe, index: number) => (
                        <div key={index} className="column lg-4 md-6">
                            <Card {...recipe} showPageLoader={showPageLoader} />
                        </div>
                    ))}
                </div>
            </Content>
        )
    }
}

export default connect((state: State) => {
    return {
        isSetFilter: state.filter.isSetFilter,
        recipes: state.recipes.recipesList,
        filteredRecipes: state.filter.filteredRecipesList
    }
}, {setAllRecipes, setCaloriesRange, showPageLoader})(RecipesListContainer)
