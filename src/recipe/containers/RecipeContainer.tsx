import * as React from 'react'

import axios from 'axios'

import Recipe from '../components/Recipe'


export interface RecipeInterface {
    caloricity: number
    cookTime: number
    cuisine: {
        id: number
        title: string
    }
    description: string
    difficulty: string
    id: number
    images: string[]
    ingredients: string[]
    instructions: string[]
    thumbnail: string
    title: string
}

interface Props {
    match: {
        params: {
            id: number
        }
    }
}

interface State {
    recipe: RecipeInterface
}

export default class RecipeContainer extends React.Component<Props, State> {

    state = {
        recipe: {
            caloricity: 1,
            cookTime: 1,
            cuisine: {
                id: 1,
                title: ''
            },
            description: '',
            difficulty: '',
            id: 1,
            images: [] as string[],
            ingredients: [] as string[],
            instructions: [] as string[],
            thumbnail: '',
            title: ''
        }
    }

    componentWillMount() {
        axios.get(`https://test.space-o.ru/detail_${this.props.match.params.id}.json`).then((response) => {
            this.setState({...this.state,
                recipe: response.data.receipt
            })
        })
    }

    render() {
        return (
            <Recipe {...this.state.recipe} />
        )
    }
}