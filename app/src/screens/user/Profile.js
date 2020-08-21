import Container from "@material-ui/core/Container";
import React from "react";
import AdsList from "../../components/ad/list/AdsList";
import UserDetails from "../../components/user/details/UserDetails";
import {useParams} from "react-router-dom";

export default function Profile() {
    const {userId} = useParams();
    return (
        <Container component="main" maxWidth="lg">
            <UserDetails userId={userId}/>
            <br/>
            <AdsList fetch={"user"} value={userId} tittle={"Published"}/>
        </Container>
    );
}