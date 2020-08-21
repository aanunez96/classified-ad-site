import {gql, useQuery} from "@apollo/client";

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

export default function (adId) {
    const {loading, data} = useQuery(GET_AD, {variables: {adId}});
    return {loading, data: (data?.ad) ? data.ad : data}
}