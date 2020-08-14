import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
import img from '../logo.svg';
import {gql, useQuery} from "@apollo/client";
import AdsList from '../components/ad/AdsList';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        marginButton: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    search: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    container: {
        width: '100%',
        margin: theme.spacing(4),
    },
    input: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    heading: {
        margin: theme.spacing(2),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    box: {
        height: '100%',
        width: '100%',
    },
    header: {
        textAlign: "center",
        marginTop: theme.spacing(4),
        maxWidth: "lg",
    },
    img: {
        height: 200,
        width: 200
    }

}));

const GET_AD = gql`
{
  categories
  ads{
    _id
    tittle
    price
    classification
    description
  }
}
`;

export default function Home() {
    const classes = useStyles();
    const {loading, data} = useQuery(GET_AD);


    return (
        <>
            <Container className={classes.header}>
                <Typography variant={"h2"} className={classes.heading}>
                    EzFy
                </Typography>
                <Typography component={"p"} variant={"body1"} className={classes.secondaryHeading}>
                   <span>
                       Buy and sell everything from used cars to mobile phones and computers, or search for property and
                    more around the world. It's so easyfy!!!!!
                   </span>
                </Typography>
            </Container>

            <Container component="main" maxWidth="md">
                <CssBaseline/>

                <div className={classes.paper}>
                    <Paper className={classes.search}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search Ad"
                            inputProps={{'aria-label': 'search ad'}}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                    {(loading) ?
                        <LinearProgress/>
                        :
                        (data?.categories) ?
                            <Grid container spacing={0} className={classes.container}>
                                {data.categories.map(e =>
                                    <Grid key={e} item xs={3}>
                                        <Button component={Link} to={`/category/${e}`} className={classes.box}>
                                            <Paper className={classes.box}>
                                                <Box
                                                    alignItems="center"
                                                    display="flex"
                                                    flexDirection="column">
                                                    <img src={img} className={classes.img} alt="logo"/>
                                                    <Typography
                                                        color="textPrimary"
                                                        gutterBottom
                                                        variant="h6"
                                                    >
                                                        {e}
                                                    </Typography>
                                                </Box>
                                            </Paper>
                                        </Button>
                                    </Grid>
                                )}
                            </Grid>

                            :
                            <Typography color="textSecondary" align="center">
                                No users for this project yet
                            </Typography>
                    }
                </div>
            </Container>

            {data?.ads &&
            <Container component="main" maxWidth="lg">
                <AdsList tittle={"Recent Posts"} data={data.ads}/>
            </Container>

            }
        </>
    );
}
