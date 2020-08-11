import React from 'react';
// import {useQuery} from '@apollo/react-hooks';
// import {gql} from 'apollo-boost';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from './screens/Home';
import Header from './components/themes/Header';
import SingUp from './screens/authentication/SignUp';
import SingIn from './screens/authentication/SignIn';
import {withStyles, createMuiTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Ad from './screens/ad/Ad';
import Category from './screens/ad/Category';
import CreateAd from './screens/ad/CreateAd';
import EditProfile from './screens/user/EditProfile';
import Profile from './screens/user/Profile';
import {accountsClient} from './utils/accounts-js';


let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
};

const drawerWidth = 256;

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        padding: theme.spacing(3, 4),
        background: '#eaeff1',
    },
    button: {
        marginLeft: "90%",
    },
    footer: {
        padding: theme.spacing(2),
        background: '#eaeff1',
    },
};

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const ad = gql`
// {
//   getUser{
//     id
//   }
// }
// `;

function App(props) {
    const {classes} = props;
    // const {data} = useQuery(ad);
    const [comprovateLogin, setComprovateLogin] = React.useState(false);
    const [user,setUser] = React.useState(null);
    if(!comprovateLogin){
        try{
            accountsClient.getUser().then(e => {
                setUser(e);
                setComprovateLogin(true);
            });
        }catch (e) {
            console.log(e);
        }
    }
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    console.log(user);

    function PrivateRoute({ children, ...rest }) {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    comprovateLogin  ?
                    user ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    ) : (
                            <div></div>
                        )
                }
            />
        );
    }

    return (
        <Router>
            <div className={classes.app}>
                <Header onDrawerToggle={handleDrawerToggle}/>
                <main className={classes.main}>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/ad/:adId">
                            <Ad/>
                        </Route>
                        <Route exact path="/category">
                            <Category/>
                        </Route>
                        <PrivateRoute exact path="/create-ad">
                            <CreateAd/>
                        </PrivateRoute>
                        <Route exact path="/profile">
                            <Profile/>
                        </Route>
                        <PrivateRoute exact path="/edit-profile">
                            <EditProfile/>
                        </PrivateRoute>
                        <Route exact path="/login">
                            <SingIn/>
                        </Route>
                        <Route exact path="/sign-up">
                            <SingUp/>
                        </Route>
                    </Switch>
                    <Fab aria-label="add" position="static" className={classes.button}>
                        <AddIcon/>
                    </Fab>
                </main>
                <footer className={classes.footer}>
                    <Copyright/>
                </footer>
            </div>
        </Router>
    );
}

export default withStyles(styles)(App);
