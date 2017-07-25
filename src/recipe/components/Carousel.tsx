import * as React from 'react'

const classNames = require('classnames/bind')
import Slider from 'react-slick'

const cx = classNames.bind(Object.assign({},
    require('slick-carousel/slick/slick.css'),
    require('slick-carousel/slick/slick-theme.css'),
    require('./style/carousel.scss')
))


interface Props {
    images: Array<string>
}

const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

export default class Carousel extends React.Component<Props, {}> {

    render() {
        const {images} = this.props

        return (
            <Slider {...settings} className={cx('slider')}>
                {images.map((image: string, index: number) => (
                    <div key={index}>
                        <img src={image} alt=""/>
                    </div>
                ))}
            </Slider>
        )
    }
}