import React from "react";
import Container from "@material-ui/core/Container";
import AdsList from "../../components/ad/list/AdsList";
import {useParams} from "react-router-dom";


export default function Category() {
    const {category} = useParams();

    return (
        <Container component="main" maxWidth="lg">
            <AdsList fetch="category" value={category} tittle={category.charAt(0).toUpperCase() + category.slice(1)}/>
        </Container>
    );
}