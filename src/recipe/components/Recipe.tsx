import * as React from 'react'

const classNames = require('classnames/bind')

import TimeFormat from 'common/components/TimeFormat'
import Content from 'layout/Content'
import {RecipeInterface} from '../containers/RecipeContainer'
import Carousel from './Carousel'

const cx = classNames.bind(require('./style/recipe.scss'))


interface Props extends RecipeInterface {}

export default class Recipe extends React.Component<any, {}> {

    render() {
        const {images, cuisine, title, difficulty, caloricity, ingredients, instructions, cookTime} = this.props

        return (
            <Content>
                <div className="pb-30">
                    <div className="row">
                        {images.length == 1 &&
                        <div className={cx('img')}>
                            <img src={images[0]} alt="" />
                        </div>
                        }
                        {images.length > 1 &&
                        <Carousel images={images} />
                        }
                    </div>
                    <div className={cx('cuisine')}>{cuisine.title}</div>
                    <h3 className={cx('name')}>{title}</h3>
                    <ul className={cx('info-list')}>
                        <li>
                            <i className={cx('icon-clock')} />
                            <TimeFormat seconds={cookTime} />
                        </li>
                        <li className="text-capitalize"><i className={cx('icon-difficulty')} />{difficulty}</li>
                        <li><i className={cx('icon-caloricity')} />{caloricity} kCal</li>
                    </ul>
                    {!!ingredients.length &&
                    <div>
                        <h2 className={cx('title')}>Ingredients</h2>
                        <ul className={cx('panel', 'dot-list')}>
                            {ingredients.map((ingredient: string, index: number) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    }
                    {!!instructions.length &&
                    <div>
                        <h2 className={cx('title')}>Instructions</h2>
                        <ul className={cx('panel', 'number-list')}>
                            {instructions.map((instruction: string, index: number) => (
                                <li key={index}>
                                    <span className={cx('number')}>{index + 1}</span>
                                    {instruction}
                                </li>
                            ))}
                        </ul>
                    </div>
                    }
                </div>
            </Content>
        )
    }
}