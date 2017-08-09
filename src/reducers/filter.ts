import {handleActions, Action} from 'redux-actions'

import {SetAllRecipesPayload, Recipe} from '../actions/recipesActions'
import {
    SET_FILTERED_RECIPES,
    SHOW_FILTER,
    HIDE_FILTER,
    SET_FILTER_BUTTON_SCALE,
    RESET_FILTER,
    FilterButtonScalePayload,
    SET_SEARCH_FOCUS_STYLE,
    SearchFocusStylePayload,
    SET_CALORIES_RANGE,
    CaloriesRangePayload,
    CHANGE_CALORIES
} from '../actions/filterActions'


export interface RangeValues {
    min: number
    max: number
}

export interface FilterState {
    isShowFilter: boolean
    isSetFilter: boolean
    filterButtonScale: number
    filteredRecipesList: Recipe[]
    searchFocusStyle: string
    calories: RangeValues
    caloriesRange: RangeValues
}

const initialState = <FilterState>{
    isShowFilter: false,
    isSetFilter: false,
    filterButtonScale: 1,
    filteredRecipesList: [] as Recipe[],
    searchFocusStyle: 'primary',
    calories: {
        min: 0,
        max: 3000
    },
    caloriesRange: {
        min: 0,
        max: 3000
    }
}

function handleSetFilteredRecipes(state: FilterState, action: Action<SetAllRecipesPayload>) {
    return {...state,
        isSetFilter: true,
        filteredRecipesList: action.payload.recipes
    }
}

function handleShowFilter(state: FilterState) {
    return {...state,
        isShowFilter: true
    }
}

function handleHideFilter(state: FilterState) {
    return {...state,
        isShowFilter: false
    }
}

function handleSetFilterButtonScale(state: FilterState, action: Action<FilterButtonScalePayload>) {
    return {...state,
        filterButtonScale: action.payload.filterButtonScale
    }
}

function handleResetFilter(state: FilterState) {
    return {...state,
        calories: state.caloriesRange,
        isShowFilter: false,
        isSetFilter: false
    }
}

function handleSetSearchFocusStyle(state: FilterState, action: Action<SearchFocusStylePayload>) {
    return {...state,
        searchFocusStyle: action.payload.style
    }
}

function handleSetCaloriesRange(state: FilterState, action: Action<CaloriesRangePayload>) {
    return {...state,
        calories: action.payload.values,
        caloriesRange: action.payload.values
    }
}

function handleSetCalories(state: FilterState, action: Action<CaloriesRangePayload>) {
    return {...state,
        calories: action.payload.values
    }
}

export default handleActions<FilterState>(
    {
        [SET_FILTERED_RECIPES]: handleSetFilteredRecipes,
        [SHOW_FILTER]: handleShowFilter,
        [HIDE_FILTER]: handleHideFilter,
        [SET_FILTER_BUTTON_SCALE]: handleSetFilterButtonScale,
        [RESET_FILTER]: handleResetFilter,
        [SET_SEARCH_FOCUS_STYLE]: handleSetSearchFocusStyle,
        [SET_CALORIES_RANGE]: handleSetCaloriesRange,
        [CHANGE_CALORIES]: handleSetCalories
    },
    initialState
)