import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
// import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import {Box} from "@material-ui/core";

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
    accordion: {
        width: '100%',
        margin: theme.spacing(2),
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
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
}));

const clasification = [
    {name: "Autos", sub: ["grandes", "chiquitos", "medianos", "otros"]},
    {name: "casas", sub: ["grandes", "chiquitos", "medianos", "otros"]},
    {name: "movil", sub: ["grandes", "chiquitos", "medianos", "otros"]},
    {name: "computadora", sub: ["grandes", "chiquitos", "medianos", "otros"]},
    {name: "ropa", sub: ["grandes", "chiquitos", "medianos", "otros"]},
    {name: "bici", sub: ["grandes", "chiquitos", "medianos", "otros"]},
    {name: "motos", sub: ["grandes", "chiquitos", "medianos", "otros"]},
    {name: "otros", sub: ["grandes", "chiquitos", "medianos", "otros"]},
];

export default function Home() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
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
                <div className={classes.accordion}>
                    {clasification.map(e =>
                        <Accordion expanded={expanded === e.name} onChange={handleChange(e.name)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>{e.name}</Typography>
                                <Typography
                                    className={classes.secondaryHeading}>{`this classification has ${3} ads`} </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={classes.list}>
                                    <List component="nav" aria-label="main mailbox folders">
                                        {e.sub.map(s =>
                                            <ListItem button>
                                                <ListItemText primary={s}/>
                                            </ListItem>
                                        )}
                                    </List>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    )}
                </div>
                <Grid container spacing={0}>
                    {clasification.map(e =>
                        <Grid item xs={3}>
                            <Button className={classes.box}>
                                <Paper className={classes.box}>
                                    <Box
                                        alignItems="center"
                                        display="flex"
                                        flexDirection="column">
                                        <AirportShuttleIcon style={{fontSize: 70}}/>
                                        <Typography
                                            color="textPrimary"
                                            gutterBottom
                                            variant="h6"
                                        >
                                            {e.name}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            gutterBottom
                                            variant="h9"
                                        >
                                            {`40 Posts`}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </div>
        </Container>
    );
}
