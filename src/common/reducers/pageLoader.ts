import {handleActions} from 'redux-actions'

import {
    SHOW_PAGE_LOADER,
    HIDE_PAGE_LOADER
} from '../actions/pageLoaderActions'


export interface PageLoaderState {
    isActiveLoader: boolean
}

const initialState = <PageLoaderState>{
    isActiveLoader: false
}

function handleShowPageLoader(state: PageLoaderState) {
    return {...state,
        isActiveLoader: true
    }
}

function handleHidePageLoader(state: PageLoaderState) {
    return {...state,
        isActiveLoader: false
    }
}

export default handleActions<PageLoaderState>(
    {
        [SHOW_PAGE_LOADER]: handleShowPageLoader,
        [HIDE_PAGE_LOADER]: handleHidePageLoader
    },
    initialState
)