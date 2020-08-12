import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from "@material-ui/core/Avatar";
import {accountsClient} from "../../utils/accounts-js";
import {useHistory, Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar/AppBar";


const image = 'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    iconButtonAvatar: {
        padding: 4,
    },
}));

export default function Header(props) {
    const {user} = props;
    const history = useHistory();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [redirect, setRedirect] = React.useState(false);

    const logout = async () => {
        try {
            await accountsClient.logout();
            setRedirect(true);
        } catch (e) {
            console.log(e);
        }
    };
    if (redirect) {
        setRedirect(false);
        history.push('/');
        setAnchorEl(null);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        history.push('/edit-profile')
    };

    return (
        <AppBar color="inherit" position="sticky" elevation={0}>
            <Toolbar className={classes.toolbar}>
                <Typography
                    component={Link}
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                    to={"/"}
                >
                    EZfy
                </Typography>

                <Button href={"/create-ad"} size="small">Add Ad</Button>
                {
                    (user) ?
                        <div>
                            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                        color="inherit" className={classes.iconButtonAvatar}>
                                <Avatar src={image} alt="My Avatar"/>
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem href="/edit-profile" onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            </Menu>
                        </div>
                        :
                        <Button href="/login" variant="outlined" size="small">
                            Sign up
                        </Button>
                }
            </Toolbar>
        </AppBar>
    );
}
