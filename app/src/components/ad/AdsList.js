import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

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
}));


export default function AdsList(props) {
    const classes = useStyles();
    const {tittle, data} = props;

    return (
        <>
            <Typography variant="h6" gutterBottom>
                {tittle}
            </Typography>
            < Grid container spacing={2}>
                {
                    data.map(e =>
                        <Grid item xs={3}>
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
                    )
                }
            </Grid>
        </>
    );
}