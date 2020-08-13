import {Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {gql, useMutation} from '@apollo/client';
import {useHistory} from "react-router-dom";


const UPDATE_USER = gql`
mutation updateAd(
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

export default function UpdateProfile(props) {
    const {user} = props;
    const history = useHistory();
    const [updateUser, {data}] = useMutation(UPDATE_USER);
    const [name, setName] = useState(user.profile.name);
    const [lastName, setLastName] = useState(user.profile.lastName);
    const [number, setNumber] = useState(parseInt(user.profile.number));

    return (
        <Grid
            item
            lg={8}
            md={6}
            xs={12}
        >
            <form
                autoComplete="off"
                noValidate
            >
                <Card>
                    <CardHeader
                        subheader="The information can be edited"
                        title="Profile"
                    />
                    <Divider/>
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    helperText="Please specify the first name"
                                    label="First name"
                                    onChange={event => setName(event.target.value)}
                                    required
                                    value={name}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Last name"
                                    name="lastName"
                                    onChange={event => setLastName(event.target.value)}
                                    required
                                    value={lastName}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    onChange={event => setNumber(event.target.value)}
                                    type="number"
                                    value={number}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider/>
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        p={2}
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={()=>updateUser({variables:{userId: user.id,name,lastName,number:parseInt(number)}})}
                        >
                            Save details
                        </Button>
                    </Box>
                </Card>
            </form>
        </Grid>
    );
}