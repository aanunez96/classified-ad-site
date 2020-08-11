import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Box, withStyles} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: theme.spacing(2)
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
        margin: theme.spacing(2),
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

export default function AdDetail(props) {
    const classes = useStyles();
    const {data} = props;
    return (
        <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={8} >

            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5" gutterBottom>
                    {data.tittle}
                </Typography>
                <br/>
                <ColorButton size="large" variant="outlined">{`${data.price} $`}</ColorButton>
                <br/>
                <Box
                    alignItems="center"
                    display="flex"
                >
                    <Avatar variant="rounded" className={classes.rounded}>
                        N
                    </Avatar>
                    <Typography variant="h8" gutterBottom>
                        {`${data.owner.profile.name} ${data.owner.profile.lastName}`}
                    </Typography>
                    <br/>
                    <Typography variant="h9" color="textSecondary">
                        {data.owner.emails.address}
                    </Typography>
                </Box>
                <br/>
                <div>
                    <Typography variant="h5" color="textSecondary">
                        description
                    </Typography>
                    <Button size="small">{`${data.classification} $`}</Button>
                </div>
                <br/>
                <Typography component="p">
                    {data.description}
                </Typography>

            </Grid>
        </Grid>

)
    ;
}
