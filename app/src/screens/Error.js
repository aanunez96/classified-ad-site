import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

export default function Error(props) {
    const {content}=props;
    return(
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                {content}
            </Typography>
            <Button component={Link} to={"/"} size="small">Go to Home</Button>
        </Container>
        );
}