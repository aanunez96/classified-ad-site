import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import UpdateProfile from '../../components/user/UpdateProfile';
import UpdateAvatar from '../../components/user/UpdateAvatar';
import {gql,useQuery} from "@apollo/client";
import AdsList from "../../components/ad/AdsList";

const GET_DATA = gql`
query AD(
  $userId:ID!
){
  ads(userId:$userId){
    _id
    tittle
    price
    classification
    description
  }
}`;

export default function EditProfile(props) {
    const {user} = props;
    const {data} = useQuery(GET_DATA, {variables: {userId:user.id}});

    return (
        <Container component="main" maxWidth="md">
            <Grid
                container
                spacing={3}
            >
                <UpdateAvatar user={user}/>
                <UpdateProfile user={user} owner={true}/>
            </Grid>
            <br/>
            {(data?.ads && data.ads.length !== 0) && <AdsList data={data.ads} tittle={"Published"}/>}
        </Container>

    );
};