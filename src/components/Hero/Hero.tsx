// MUI
import {
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core';
import PizzaHeroImage from '../Images/PizzaHeroImage.png';
import TomatoHeroImage from '../Images/TomatoHeroImage.png';
import GarlicHeroImage from '../Images/GarlicHeroImage.png';
// Styles
const useStyles = makeStyles((theme) => ({
    heroBackground: {
        position: 'relative',
        backgroundColor: '#f0f6fb',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 600,
    },
    heroOverlay: {
        position: 'relative',
        marginTop: theme.spacing(25),
    },
    tomato: {
        height: 200,
        width: 200
    },
    garlic: {
        height: 180,
        width: 180
    }
}));
export default function Hero() {
    const classes = useStyles();

    return (
        <div className={classes.heroBackground}>
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.heroOverlay}>
                        <Typography
                            variant="h3"
                            align="center"
                        >
                            Pizza Delivery in Minneapolis
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                        >
                            Order delicious, fresh pizza today!
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ marginTop: 100, textAlign: 'center' }}>
                        <img src={PizzaHeroImage} />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img src={TomatoHeroImage} className={classes.tomato} />
                </Grid>
                <Grid item xs={6}>
                    <img src={GarlicHeroImage} className={classes.garlic}/>
                </Grid>
            </Grid>
        </div>
    );
}