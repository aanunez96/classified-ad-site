import {gql, useMutation, useQuery} from "@apollo/client";
import {useContext} from "react";
import {Context} from "../../../utils/Store";

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

const UPDATE_AD = gql`
mutation updateAd(
  $adId: ID!
  $tittle: String
  $description: String
  $classification: Category
  $price: Int
){
  modifyAd(
    tittle: $tittle,
    adId: $adId,
    description: $description,
    price: $price,
    classification:$classification
    ){
    classification
    _id
  }
}
`;


const CREATE_AD = gql`
mutation createAd(
  $tittle: String!
  $description: String
  $price: Int!
  $owner : ID!
  $classification: Category!
){
createAd(
  tittle: $tittle,
  owner: $owner,
  description: $description,
  classification: $classification,
  price: $price
){
  _id
  classification
 }
}`;

export default function (adId) {
    const {loading, data} = (adId)? useQuery(GET_AD, {variables: {adId}}): {loading:false, data:false};
    const [updateAd, {data: dataMutation}] = useMutation((adId) ? UPDATE_AD : CREATE_AD);
    const [user] = useContext(Context);


    const modify = async ({tittle, description, price, classification}, error) => {
        let variables = {
            tittle,
            description,
            price,
            classification
        };
        variables = (adId) ? {...variables, adId: data.ad._id} : {...variables, owner: user.id};
        try {
            await updateAd({variables})
        } catch (e) {
            error(true);
        }
    };
    return [
        loading,
        data ? data.ad : data,
        modify,
        dataMutation ? (adId) ? dataMutation.modifyAd : dataMutation.createAd : dataMutation
    ];
}