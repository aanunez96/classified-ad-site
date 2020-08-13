import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import UpdatePicture from "../../components/ad/UpdatePicture";
import UpdateAd from "../../components/ad/UpdateAd";
import React from "react";
import {useParams} from "react-router-dom";
import {gql, useQuery} from '@apollo/client';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from "@material-ui/core/Typography";

const GET_AD = gql`
query AD(
  $adId:ID!
){
  ad(adId:$adId){
    _id
    description
    tittle
    classification
    price
    date
    owner{
      _id
      profile{
        name
        lastName
        number
        avatar
      }
      emails{
        address
      }
    }
  }
}`;

export default function UpdateAdView() {
    const {adId} = useParams();
    const {loading, data} = useQuery(GET_AD, {variables: {adId}});

    return (
        <Container component="main" maxWidth="md">
            {(loading) ?
                <LinearProgress/>
                :
                (data?.ad) ?
                    <Grid container spacing={3}>
                        <UpdatePicture picture={""}/>
                        <UpdateAd ad={data.ad}/>
                    </Grid>
                    :
                    <Typography color="textSecondary" align="center">
                        No users for this project yet
                    </Typography>
            }
        </Container>

    );
};