import {Avatar, Box, Button, Card, CardActions, CardContent, Divider, Grid, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import moment from 'moment';

const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
        height: 200,
        width: 200
    }
}));

export default function UpdatePicture(props) {
    const {user} = props;
    const classes = useStyles();

    return (
        <Grid
            item
            lg={4}
            md={6}
            xs={12}
        >
            <Card
            >
                <CardContent>
                    <Box
                        alignItems="center"
                        display="flex"
                        flexDirection="column"
                    >
                        <Avatar
                            className={classes.avatar}
                            src={user.avatar}
                        />
                        <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h3"
                        >
                            {user.name}
                        </Typography>
                        <Typography
                            color="textSecondary"
                            variant="body1"
                        >
                            {`${user.city} ${user.country}`}
                        </Typography>
                        <Typography
                            className={classes.dateText}
                            color="textSecondary"
                            variant="body1"
                        >
                            {`${moment().format('hh:mm A')} ${user.timezone}`}
                        </Typography>
                    </Box>
                </CardContent>
                <Divider/>
                <CardActions>
                    <Button
                        color="primary"
                        fullWidth
                        variant="text"
                    >
                        Upload picture
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}