import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import UpdatePicture from '../../components/ad/UpdatePicture';
import UpdateAd from '../../components/ad/UpdateAd';


export default function CreateAd() {

    return (
        <Container component="main" maxWidth="md">
            <Grid container spacing={3}>
                <UpdatePicture picture={""}/>
                <UpdateAd />
            </Grid>
        </Container>

    );
};
