import React from "react";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import {gql, useQuery} from '@apollo/client';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useParams} from "react-router-dom";
import AdDetails from '../../components/ad/AdDetails';
import AdsList from '../../components/ad/AdsList';

const GET_AD = gql`
query AD(
  $adId:ID!
  $category: Category!
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
  ads(classification:$category){
    _id
    tittle
    price
    classification
    description
  }
}`;


export default function Ad() {
    const {adId, category} = useParams();
    const {loading, data} = useQuery(GET_AD, {variables: {adId,category}});


    return (
        <Container component="main" maxWidth="lg">
            {(loading) ?
                <LinearProgress/>
                :
                (data?.ad) ?
                    <>
                    <AdDetails data={data.ad}/>
                    <AdsList data={data.ads} tittle={"Related Ads"}/>
                    </>
                    :
                    <Typography color="textSecondary" align="center">
                        No users for this project yet
                    </Typography>
            }

        </Container>
    );
}