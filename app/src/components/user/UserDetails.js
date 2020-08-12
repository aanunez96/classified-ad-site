import {Avatar, Box, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
const image = 'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$';

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
                src={image}
            />
            <Box
                alignItems="left"
                display="flex"
                flexDirection="column"
            >
                <Typography variant="h4" gutterBottom >
                    {`${user.profile.name} ${user.profile.lastName}`}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body2"
                    className={classes.text}
                >
                    {user.emails[0].address}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body2"
                    className={classes.text}
                >
                    {user.profile.number}
                </Typography>
            </Box>
        </Box>
    );
}