// MUI
import {
    Typography,
    AppBar,
    Toolbar
} from "@material-ui/core";

export default function Navbar() {
    return (
        <AppBar
            elevation={0}
            style={{ marginBottom: 100, background: '#fefcf6' }}
        >
            <Toolbar>
                <Typography style={{ flexGrow: 1, color: '#e75301' }}>
                    Pizza Time
                </Typography>
                <Typography style={
                    { marginRight: 10, cursor: 'pointer', color: '#e75301' }
                }>
                    Cart
                </Typography>
            </Toolbar>
        </AppBar>
    );
}