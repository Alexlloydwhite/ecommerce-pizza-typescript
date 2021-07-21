// MUI
import {
    Grid,
    Typography,
    makeStyles,
    Container
} from '@material-ui/core';
import PizzaHeroImage from './Images/PizzaHeroImage.png';
import TomatoHeroImage from './Images/TomatoHeroImage.png';
import GarlicHeroImage from './Images/GarlicHeroImage.png';
// Styles
const useStyles = makeStyles((theme) => ({
    heroBackground: {
        backgroundColor: '#f0f6fb',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 550,
    },
    container: {
        display: 'flex',
    },
    wrapper: {
        marginTop: 100,
        textAlign: 'center',
    },
    image: {
        maxWidth: '100%',
    },
    heroOverlay: {
        justifyContent: 'center',
    },
    pizza: {
        textAlign: 'center',
        marginTop: theme.spacing(-10)
    },
    tomato: {
        width: 250,
        heigh: 250
    }
}));
export default function Hero() {
    const classes = useStyles();

    return (
        <div className={classes.heroBackground}>
            <Container component="section" className={classes.container}>
                <Grid container>
                    <Grid item xs={12} className={classes.wrapper} >
                        <div>
                            <Typography variant="h3" gutterBottom>
                                Pizza Delivery in Minneapolis
                            </Typography>
                            <Typography variant="h5">
                                Order Today!
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.wrapper}>
                            <img src={PizzaHeroImage} className={classes.image} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}