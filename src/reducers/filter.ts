import {handleActions, Action} from 'redux-actions'

import {SetAllRecipesPayload, Recipe} from '../actions/recipesActions'
import {
    SET_FILTERED_RECIPES,
    SHOW_FILTER,
    HIDE_FILTER,
    SET_FILTER_BUTTON_SCALE,
    RESET_FILTER,
    FilterButtonScalePayload
} from '../actions/filterActions'


export interface FilterState {
    isShowFilter: boolean
    isSetFilter: boolean
    filterButtonScale: number
    filteredRecipesList: Recipe[]
}

const initialState = <FilterState>{
    isShowFilter: false,
    isSetFilter: false,
    filterButtonScale: 1,
    filteredRecipesList: []
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
        isShowFilter: false,
        isSetFilter: false
    }
}

export default handleActions<FilterState>(
    {
        [SET_FILTERED_RECIPES]: handleSetFilteredRecipes,
        [SHOW_FILTER]: handleShowFilter,
        [HIDE_FILTER]: handleHideFilter,
        [SET_FILTER_BUTTON_SCALE]: handleSetFilterButtonScale,
        [RESET_FILTER]: handleResetFilter
    },
    initialState
)