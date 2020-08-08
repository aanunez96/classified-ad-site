import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const ad = {
    tittle: "fori",
    owner: {name: "yo mismo", adress: "excateplaca@esta.talla"},
    description: "esto es una talla sana pero te deja un arrebato increible",
    classification: "blum",
    price: 200,
    date: new Date(),
};
const related = [ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad];

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 100,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    typo:{
        margin: theme.spacing(5),
    }
}));

export default function AdsList() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Category
            </Typography>
            <Grid container spacing={3}>
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