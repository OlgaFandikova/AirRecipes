import * as React from 'react'
import {connect} from 'react-redux'

import axios from 'axios'

import {State} from 'reducers'
import {setAllRecipes, Recipe} from 'actions/recipesActions'
import Content from 'layout/Content'
import Card from '../components/card/Card'


interface Props {
    isSetFilter: boolean
    recipes: Recipe[]
    filteredRecipes: Recipe[]
    setAllRecipes: (recipes: Recipe[]) => void
}

class RecipesListContainer extends React.Component<Props, {}> {

    componentWillMount() {
        axios.get('https://test.space-o.ru/list.json').then((response) => {
            this.props.setAllRecipes(response.data.recipes)
        })
    }

    render() {
        const {recipes, filteredRecipes, isSetFilter} = this.props
        const recipesList = isSetFilter ? filteredRecipes : recipes

        return (
            <Content>
                <div className="row mt-md-40 mt-lg-40">
                    {isSetFilter && !filteredRecipes.length &&
                        <div>No filtered results</div>
                    }
                    {recipesList.map((recipe: Recipe, index: number) => (
                        <div key={index} className="column lg-4 md-6">
                            <Card {...recipe} />
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
}, {setAllRecipes})(RecipesListContainer)
