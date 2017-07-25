import {handleActions, Action} from 'redux-actions'

import {SET_ALL_RECIPES, SetAllRecipesPayload, Recipe} from '../actions/recipesActions'


export interface RecipesState {
    recipesList: Recipe[]
}

const initialState = <RecipesState>{
    recipesList: []
}

function handleSetAllRecipes(state: RecipesState, action: Action<SetAllRecipesPayload>) {
    return {...state,
        recipesList: action.payload.recipes
    }
}

export default handleActions<RecipesState>(
    {
        [SET_ALL_RECIPES]: handleSetAllRecipes
    },
    initialState
)
