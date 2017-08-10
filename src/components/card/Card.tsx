import * as React from 'react'
import {Link} from 'react-router-dom'
import {push} from 'react-router-redux'

const classNames = require('classnames/bind')

import {Recipe} from 'actions/recipesActions'
import {store} from 'store'

const cx = classNames.bind(require('./style/card.scss'))


interface Props extends Recipe {
    showPageLoader: () => void
}

export default class Card extends React.Component<Props, {}> {

    render() {
        const {caloricity, cuisine, description, thumbnail, title, id} = this.props

        return (
            <div className={cx('card')} onClick={this.handleRedirect}>
                <div className={cx('img')} style={{background: `url(${thumbnail}) no-repeat center`}} />
                <div className={cx('body')}>
                    <h4 className={cx('title')}>{title}</h4>
                    <div className={cx('subtitle')}>
                        <span>{cuisine.title} Cuisine</span>
                        <span className="font-weight-300">{caloricity} kCal</span>
                    </div>
                    <p className={cx('description')}>{description}</p>
                </div>
                <div className={cx('footer')}>
                    <span className={cx('button')} onClick={this.handleShowRecipeDetails}>
                        Read More<i className={cx('arrow')} />
                    </span>
                </div>
            </div>
        )
    }

    private handleRedirect = () => {
        if (document.documentElement.clientWidth < 768) {
            this.handleShowRecipeDetails()
        }
    }

    private handleShowRecipeDetails = () => {
        this.props.showPageLoader()
        store.dispatch(push(`recipe-${this.props.id}`))
    }
}
