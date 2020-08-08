import Container from "@material-ui/core/Container";
import React from "react";
import {Avatar, Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button";

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};

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
    root: {},
    avatar: {
        height: 130,
        width: 130,
        marginRight: theme.spacing(4),
    },
    text:{
        marginTop: theme.spacing(0.7),
    }
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg">
            <Box
                alignItems="top"
                display="flex"
            >
            <Avatar
                className={classes.avatar}
                src={user.avatar}
            />
                <Box
                    alignItems="left"
                    display="flex"
                    flexDirection="column"
                >
                    <Typography variant="h4" gutterBottom >
                        Category
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                        className={classes.text}
                    >
                        {`${user.city} ${user.country}`}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                        className={classes.text}
                    >
                        {`${user.city} ${user.country}`}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                        className={classes.text}
                    >
                        {`${user.city} ${user.country}`}
                    </Typography>
                </Box>
            </Box>
            <br/>
            <Typography variant="h6" gutterBottom>
                Published
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