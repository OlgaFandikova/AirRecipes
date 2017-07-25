import {combineReducers} from 'redux'

import recipesReducer, {RecipesState} from './recipes'
import filterReducer, {FilterState} from './filter'


export interface State {
    recipes: RecipesState
    filter: FilterState
}

export default combineReducers({
    recipes: recipesReducer,
    filter: filterReducer
})
