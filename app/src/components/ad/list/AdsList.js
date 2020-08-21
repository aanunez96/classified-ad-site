import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import CardAd from './CardAd';
import Skeleton from '@material-ui/lab/Skeleton';
import {Box} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import useAdsList from './useAdsList';


export default function AdsList(props) {
    const {tittle, fetch, value, owner} = props;
    const {loading, data} = useAdsList(fetch, value);
    return (
        <>

            {loading ?
                <>
                    <Skeleton variant="text" width={"20%"}/>
                    <br/>
                    <LinearProgress/>
                    <br/>
                </> :
                <Typography variant="h6" gutterBottom>
                    {tittle}
                </Typography>
            }
            < Grid container spacing={2}>
                {(loading ? Array.from(new Array(4)) : data).map((item, index) => (
                    <Grid key={index} item xs={3}>
                        {item ?
                            <CardAd data={item} owner={(owner) ? true : false}/>
                            :
                            (
                                <Box>
                                    <Skeleton variant="rect" width={"100%"} height={300}/>
                                    <Skeleton animation="wave" width={"70%"}/>
                                    <Skeleton animation="wave" width={"30%"}/>
                                    <Skeleton animation="wave" width={"100%"}/>
                                </Box>
                            )
                        }

                    </Grid>
                ))}
            </Grid>
        </>
    );
}