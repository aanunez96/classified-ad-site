import React from "react";
import Container from "@material-ui/core/Container";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {green} from '@material-ui/core/colors';
import {Box} from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

const ad = {
    tittle: "fori",
    owner: {name: "yo mismo", adress: "excateplaca@esta.talla"},
    description: "esto es una talla sana pero te deja un arrebato increible",
    classification: "blum",
    price: 200,
    date: new Date(),
};
export const related = [ad, ad, ad, ad];
const useStyles = makeStyles((theme) => ({
    specs: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    card: {
        minWidth: 100,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
        margin: theme.spacing(2),
    },
}));

export default function Ad() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={8} className={classes.grid}>

                </Grid>
                <Grid item xs={4} className={classes.grid}>
                    <Typography variant="h5" gutterBottom>
                        {ad.tittle}
                    </Typography>
                    <br/>
                    <ColorButton size="large" variant="outlined">{`${ad.price} $`}</ColorButton>
                    <br/>
                    <Box
                        alignItems="center"
                        display="flex"
                    >
                        <Avatar variant="rounded" className={classes.rounded}>
                            N
                        </Avatar>
                        <Typography variant="h8" gutterBottom>
                            {ad.owner.name}
                        </Typography>
                        <br/>
                        <Typography variant="h9" color="textSecondary">
                            {ad.owner.adress}
                        </Typography>
                    </Box>
                    <br/>
                    <div>
                        <Typography variant="h5" color="textSecondary">
                            description
                        </Typography>
                        <Button size="small">{`${ad.classification} $`}</Button>
                    </div>
                    <br/>
                    <Typography component="p">
                        {ad.description}
                    </Typography>

                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
                Related Ads
            </Typography>
            <Grid container spacing={2}>
                {related.map(e =>
                    <Grid item xs={3} >
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {e.tittle}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {`${e.price} $`}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {`${e.description.substring(0, 20)} ...`}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">view Ad</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}