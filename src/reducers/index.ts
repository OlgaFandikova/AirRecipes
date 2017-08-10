import {combineReducers} from 'redux'

import pageLoaderReducer, {PageLoaderState} from 'common/reducers/pageLoader'
import recipesReducer, {RecipesState} from './recipes'
import filterReducer, {FilterState} from './filter'


export interface State {
    recipes: RecipesState
    filter: FilterState
    pageLoader: PageLoaderState
}

export default combineReducers({
    recipes: recipesReducer,
    filter: filterReducer,
    pageLoader: pageLoaderReducer
})
