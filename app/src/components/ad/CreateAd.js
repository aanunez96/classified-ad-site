import React, {useState} from 'react';

import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    makeStyles, CardHeader, Grid, TextField
} from '@material-ui/core';
import Container from "@material-ui/core/Container";

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};

const useStyles = makeStyles(() => ({
    root: {},
    avatar: {
        height: 200,
        width: 200
    }
}));


export default function CreateAd() {
    const classes = useStyles();
    const [values, setValues] = useState({
        firstName: 'Katarina',
        lastName: 'Smith',
        email: 'demo@devias.io',
        phone: '',
        state: 'Alabama',
        country: 'USA'
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    return (
        <Container component="main" maxWidth="md">
            <Grid
                container
                spacing={3}
            >
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
                <Grid
                    item
                    lg={8}
                    md={6}
                    xs={12}
                >
                    <form
                        autoComplete="off"
                        noValidate
                    >
                        <Card>
                            <CardHeader
                                subheader="The information can be edited"
                                title="Ad"
                            />
                            <Divider/>
                            <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Tittle"
                                            name="Tittle"
                                            onChange={handleChange}
                                            required
                                            value={values.lastName}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            onChange={handleChange}
                                            required
                                            value={values.email}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Phone Number"
                                            name="phone"
                                            onChange={handleChange}
                                            type="number"
                                            value={values.phone}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            id="filled-textarea"
                                            label="Multiline Placeholder"
                                            placeholder="Placeholder"
                                            multiline
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider/>
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                p={2}
                            >
                                <Button
                                    color="primary"
                                    variant="contained"
                                >
                                    Save details
                                </Button>
                            </Box>
                        </Card>
                    </form>
                </Grid>
            </Grid>
        </Container>

    );
};
