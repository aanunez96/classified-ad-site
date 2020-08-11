import React from "react";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import {gql, useQuery} from '@apollo/client';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useParams} from "react-router-dom";
import AdDetails from '../../components/ad/AdDetails';
import AdsList from '../../components/ad/AdsList';

const ad = {
    tittle: "fori",
    owner: {name: "yo mismo", adress: "excateplaca@esta.talla"},
    description: "esto es una talla sana pero te deja un arrebato increible",
    classification: "blum",
    price: 200,
    date: new Date(),
};
export const related = [ad, ad, ad, ad];
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

export default function Ad() {
    const {adId} = useParams();
    const {loading, data} = useQuery(GET_AD, {variables: {adId}});

    return (
        <Container component="main" maxWidth="lg">
            {(loading) ?
                <LinearProgress/>
                :
                (data?.ad) ?
                    <>
                    <AdDetails data={data}/>
                    <AdsList data={related} tittle={"Related Ads"}/>
                    </>
                    :
                    <Typography color="textSecondary" align="center">
                        No users for this project yet
                    </Typography>
            }

        </Container>
    );
}