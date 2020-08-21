import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import Container from "@material-ui/core/Container";
import UpdateProfile from '../../components/user/update/UpdateProfile';
import UpdateAvatar from '../../components/user/UpdateAvatar';
import AdsList from "../../components/ad/list/AdsList";
import {Context} from "../../utils/Store";

export default function EditProfile() {
    const [user] = useContext(Context);

    return (
        <Container component="main" maxWidth="md">
            <Grid
                container
                spacing={3}
            >
                <UpdateAvatar />
                <UpdateProfile />
            </Grid>
            <br/>
            <AdsList fetch={"user"} value={user.id} owner={true} tittle={"Published"}/>}
        </Container>

    );
};