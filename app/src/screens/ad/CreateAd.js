import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import UpdatePicture from '../../components/ad/UpdatePicture';
import UpdateAd from '../../components/ad/UpdateAd';

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};

export default function CreateAd() {

    return (
        <Container component="main" maxWidth="md">
            <Grid container spacing={3}>
                <UpdatePicture picture={""}/>
                <UpdateAd user={user}/>
            </Grid>
        </Container>

    );
};
