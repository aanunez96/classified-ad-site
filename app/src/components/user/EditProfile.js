import React, {useState} from 'react';
// import moment from 'moment';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
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
        height: 100,
        width: 100
    }
}));
const states = [
    {
        value: 'alabama',
        label: 'Alabama'
    },
    {
        value: 'new-york',
        label: 'New York'
    },
    {
        value: 'san-francisco',
        label: 'San Francisco'
    }
];

export default function EditProfile() {
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
                                {/*<Typography*/}
                                {/*    className={classes.dateText}*/}
                                {/*    color="textSecondary"*/}
                                {/*    variant="body1"*/}
                                {/*>*/}
                                {/*    {`${moment().format('hh:mm A')} ${user.timezone}`}*/}
                                {/*</Typography>*/}
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
                                title="Profile"
                            />
                            <Divider/>
                            <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                >
                                    <Grid
                                        item
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            helperText="Please specify the first name"
                                            label="First name"
                                            name="firstName"
                                            onChange={handleChange}
                                            required
                                            value={values.firstName}
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
                                            label="Last name"
                                            name="lastName"
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
                                        md={6}
                                        xs={12}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Country"
                                            name="country"
                                            onChange={handleChange}
                                            required
                                            value={values.country}
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
                                            label="Select State"
                                            name="state"
                                            onChange={handleChange}
                                            required
                                            select
                                            SelectProps={{native: true}}
                                            value={values.state}
                                            variant="outlined"
                                        >
                                            {states.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
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