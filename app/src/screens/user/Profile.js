import Container from "@material-ui/core/Container";
import React from "react";
import AdsList from "../../components/ad/AdsList";
import UserDetails from "../../components/user/UserDetails"

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};

const ad = {
    tittle: "fori",
    owner: {name: "yo mismo", adress: "excateplaca@esta.talla"},
    description: "esto es una talla sana pero te deja un arrebato increible",
    classification: "blum",
    price: 200,
    date: new Date(),
};
export const related = [ad, ad, ad, ad];



export default function Profile() {

    return (
        <Container component="main" maxWidth="lg">
            <UserDetails user={user}/>
            <br/>
            <AdsList data={related} tittle={"Published"}/>
        </Container>
    );
}