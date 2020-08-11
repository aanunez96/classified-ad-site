import {Avatar, Box, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

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

export default function Profile(props) {
    const classes = useStyles();
    const {user} = props;

    return(
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
    );
}