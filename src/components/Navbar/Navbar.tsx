// MUI
import {
    Typography,
    AppBar,
    Toolbar
} from "@material-ui/core";

export default function Navbar() {
    return (
        <AppBar elevation={0} style={{ marginBottom: 100 }}>
            <Toolbar>
                <Typography style={{ flexGrow: 1 }}>
                    Pizza Time
                </Typography>
                <Typography style={{ marginRight: 10, cursor: 'pointer' }}>
                    Cart
                </Typography>
            </Toolbar>
        </AppBar>
    );
}