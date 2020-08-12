import {Avatar, Box, Button, Card, CardActions, CardContent, Divider, Grid} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const image = 'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$';

const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
        height: 200,
        width: 200
    }
}));

export default function UpdatePicture() {
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
                            src={image}
                            variant="square"
                        />
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