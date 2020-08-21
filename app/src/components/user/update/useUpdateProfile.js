import {gql, useMutation} from "@apollo/client";
import {useContext} from "react";
import {Context} from "../../../utils/Store";

const UPDATE_USER = gql`
mutation updateUser(
  $userId: ID!
  $name: String
  $lastName: String
  $number: Int
){
  modifyUser(
    userId: $userId,
    lastName: $lastName,
    number: $number,
    name: $name){
    profile{
      name
      lastName
      number
    }
  }
}
`;
export default function () {
    const [updateUser, {data}] = useMutation(UPDATE_USER);
    const [user, dispatch] = useContext(Context);
    data && dispatch({
        type: "GET_USER",
        payload: {...user, profile: data.modifyUser.profile}
    });

    const update = async (values, error) => {
        try {
            await updateUser({
                variables: {
                    userId: user.id,
                    name: values.name,
                    lastName: values.lastName,
                    number: values.number
                }
            })

        } catch (e) {
            error(true);
        }
    };

    return update;
}