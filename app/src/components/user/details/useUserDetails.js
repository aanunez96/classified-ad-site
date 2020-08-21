import {gql, useQuery} from "@apollo/client";

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
}`;

export default function (userId) {
    const {loading, data} = useQuery(GET_DATA, {variables: {userId}});

    return {loading, data: (data?.user) ? data.user : data};
}