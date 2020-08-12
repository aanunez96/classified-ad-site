import Container from "@material-ui/core/Container";
import React from "react";
import AdsList from "../../components/ad/AdsList";
import UserDetails from "../../components/user/UserDetails";
import {useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import Typography from "@material-ui/core/Typography";

const GET_DATA = gql`
query AD(
  $userId:ID!
){
  user(userId:$userId){
    profile{
      name
      lastName
      avatar
      number
    }
    emails{
      address
    }
  }
  ads(userId:$userId){
    _id
    tittle
    price
    classification
    description
  }
}`;


export default function Profile() {
    const {userId} = useParams();
    const {loading, data} = useQuery(GET_DATA, {variables: {userId}});

    return (
        (loading) ?
            <LinearProgress/>
            :
            (data) ?
                <Container component="main" maxWidth="lg">
                    <UserDetails user={data.user}/>
                    <br/>
                    <AdsList data={data.ads} tittle={"Published"}/>
                </Container>
                :
                <Typography color="textSecondary" align="center">
                    No users for this project yet
                </Typography>
    );
}