import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import UpdatePicture from "../../components/ad/UpdatePicture";
import UpdateAd from "../../components/ad/update/UpdateAd";
import React from "react";
import {useParams} from "react-router-dom";



export default function UpdateAdView() {
    const {adId} = useParams();

    return (
        <Container component="main" maxWidth="md">
            <Grid container spacing={3}>
                <UpdatePicture picture={""}/>
                <UpdateAd adId={adId}/>
            </Grid>
        </Container>

    );
};