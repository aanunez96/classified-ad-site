import React from "react";
import Container from "@material-ui/core/Container";
import AdsList from "../../components/ad/AdsList";
import {useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import Typography from "@material-ui/core/Typography";

const GET_ADS = gql`
query AD(
  $category: Category!
){
  ads(classification:$category){
    tittle
    price
    classification
    description
  }
}`;

export default function Category() {
    const {category} = useParams();
    const {loading, data} = useQuery(GET_ADS, {variables: {category}});

    return (
        <Container component="main" maxWidth="lg">
            {(loading) ?
                <LinearProgress/>
                :
                (data?.ads) ?
                    <AdsList data={data.ads} tittle={category}/>
                    :
                    <Typography color="textSecondary" align="center">
                        No users for this project yet
                    </Typography>
            }
        </Container>
    );
}