import {Recipe} from './recipesActions'


export const SET_FILTERED_RECIPES = 'SET_FILTERED_RECIPES'

export function setFilteredRecipes(recipes: Recipe[]) {
    return {
        type: SET_FILTERED_RECIPES,
        payload: {recipes}
    }
}

export const SHOW_FILTER = 'SHOW_FILTER'

export function showFilter() {
    return {
        type: SHOW_FILTER
    }
}

export const HIDE_FILTER = 'HIDE_FILTER'

export function hideFilter() {
    return {
        type: HIDE_FILTER
    }
}

export const SET_FILTER_BUTTON_SCALE = 'SET_FILTER_BUTTON_SCALE'

export interface FilterButtonScalePayload {
    filterButtonScale: number
}

export function setFilterButtonScale(filterButtonScale: number) {
    return {
        type: SET_FILTER_BUTTON_SCALE,
        payload: {filterButtonScale}
    }
}

export const RESET_FILTER = 'RESET_FILTER'

export function resetFilter() {
    return {
        type: RESET_FILTER
    }
}