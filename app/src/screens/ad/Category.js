import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import AdsList from "../../components/ad/AdsList";

const ad = {
    tittle: "fori",
    owner: {name: "yo mismo", adress: "excateplaca@esta.talla"},
    description: "esto es una talla sana pero te deja un arrebato increible",
    classification: "blum",
    price: 200,
    date: new Date(),
};
const related = [ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad];



export default function Category() {

    return (
        <Container component="main" maxWidth="lg">
            <AdsList data={related} tittle={"Category"}/>
        </Container>
    );
}