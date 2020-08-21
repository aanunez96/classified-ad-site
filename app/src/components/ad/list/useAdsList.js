import {gql, useQuery} from "@apollo/client";

function getQuery(key, value) {
    let variablesGql;
    let queryGql;
    let variables;
    switch (key) {
        case 'category':
            variablesGql = `query AD(
           $category: Category!
           )`;
            queryGql = `(classification:$category)`;
            variables = {category: value};
            break;
        case 'user':
            variablesGql = `query AD(
            $userId:ID!
            )`;
            queryGql = `(userId:$userId)`;
            variables= {userId: value};
            break;
        default:
            variablesGql = "";
            queryGql = "";
            variables = undefined;
            break;
    }
    const query = gql` 
    ${variablesGql}{
      ads${queryGql}{
        _id
        tittle
        price
        classification
        description
      }
    }`;

    return {query,variables};
}

export default function (key,value) {
    const {query, variables} = getQuery(key,value);
    const {loading, data} = useQuery(query, {variables});

    return {loading, data: (data?.ads) ? data.ads : data};
}