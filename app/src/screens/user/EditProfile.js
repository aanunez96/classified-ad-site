import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import UpdateProfile from '../../components/user/UpdateProfile';
import UpdateAvatar from '../../components/user/UpdateAvatar';

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};


export default function EditProfile() {

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