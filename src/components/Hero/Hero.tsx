import { makeStyles } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useState } from 'react';

import CheesePizza from './Images/CheesePizza.jpg';
import MeatPizza from './Images/MeatPizza.jpg';
import Restaurant from './Images/Restaurant.jpg';
import Salad from './Images/Salad.jpg';
import Takeout from './Images/Takeout.jpg';

const images: string[] = [
    CheesePizza, MeatPizza, Salad, Restaurant, Takeout
];


export default function Hero() {
    const [imageIndex, setImageIndex] = useState(0);

    const useStyles = makeStyles((theme) => {
        return {
            imageCarousel: {
                position: 'relative',
                backgroundColor: theme.palette.grey[800],
                color: theme.palette.common.white,
                backgroundImage: `url(${images[imageIndex]})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: 800,
            },
            overlay: {
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)',
            },
            previousArrow: {
                position: 'absolute',
                top: '50%',
                zIndex: 10,
                left: 10,
                cursor: 'pointer',
                fontSize: '300%'
            },
            nextArrow: {
                position: 'absolute',
                top: '50%',
                zIndex: 10,
                right: 0,
                cursor: 'pointer',
                fontSize: '300%'
            }
        }
    });
    const classes = useStyles();

    const nextImage = (): void => {
        setImageIndex((i) => (i + 1) % images.length);
    }

    const prevImage = (): void => {
        if (imageIndex === 0) {
            setImageIndex(images.length - 1)
        } else {
            setImageIndex((i) => i - 1)
        }
    }
    return (
        <div className={classes.imageCarousel}>
            <div className={classes.overlay}>
                <ArrowBackIosIcon
                    onClick={() => prevImage()}
                    className={classes.previousArrow}
                />
                <ArrowForwardIosIcon
                    onClick={() => nextImage()}
                    className={classes.nextArrow}
                />
            </div>
        </div>
    );
}