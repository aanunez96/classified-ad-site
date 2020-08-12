import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import UpdateProfile from '../../components/user/UpdateProfile';
import UpdateAvatar from '../../components/user/UpdateAvatar';

export default function EditProfile(props) {
    const {user} = props;
    console.log(user);

    return (
        <Container component="main" maxWidth="md">
            <Grid
                container
                spacing={3}
            >
                <UpdateAvatar user={user}/>
                <UpdateProfile user={user}/>
            </Grid>
        </Container>

    );
};