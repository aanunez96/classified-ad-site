import React from "react";
import Container from "@material-ui/core/Container";
import {useParams} from "react-router-dom";
import AdDetails from '../../components/ad/details/AdDetails';
import AdsList from '../../components/ad/list/AdsList';

export default function Ad() {
    const {adId, category} = useParams();

    return (
        <Container component="main" maxWidth="lg">
            <AdDetails adId={adId}/>
            <AdsList fetch="category" value={category} tittle={"Related Ads"}/>
        </Container>
    );
}