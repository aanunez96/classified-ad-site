import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import CardAd from './CardAd';



export default function AdsList(props) {
    const {tittle, data} = props;

    return (
        <>
            <Typography variant="h6" gutterBottom>
                {tittle}
            </Typography>
            < Grid container spacing={2}>
                {
                    data.map(e =>
                        <Grid item xs={3}>
                            <CardAd data={e}/>
                        </Grid>
                    )
                }
            </Grid>
        </>
    );
}