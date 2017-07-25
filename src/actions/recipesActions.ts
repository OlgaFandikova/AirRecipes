export const SET_ALL_RECIPES = 'SET_ALL_RECIPES'

export interface Recipe {
    caloricity: number
    cuisine: {
        id: number,
        title: string
    }
    description: string
    id: number
    thumbnail: string
    title: string
}

export interface SetAllRecipesPayload {
    recipes: Recipe[]
}

export function setAllRecipes(recipes: Recipe[]) {
    return {
        type: SET_ALL_RECIPES,
        payload: {recipes}
    }
}
