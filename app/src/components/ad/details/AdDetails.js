import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import {Link} from "react-router-dom";
import useAdDetails from './useAdDetails';
import Skeleton from "@material-ui/lab/Skeleton";

const image = 'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$';
const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    price: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
        marginRight: theme.spacing(2),
    },
    imgAd: {
        width: "100%",
        height: "100%",
        objectFit: "scale-down",
    },
    imgAvatar: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    }

}));


export default function AdDetail(props) {
    const classes = useStyles();
    const {adId} = props;
    const {loading, data} = useAdDetails(adId);

    return (
        <Grid container spacing={3} className={classes.margin}>
            <Grid item xs={8}>
                <Box height={"100%"} maxHeight={500}>
                    {loading ?
                        <Skeleton variant="rect" width={"100%"} height={"100%"}/>
                        :
                        <img src={image} className={classes.imgAd} alt="ad"/>
                    }
                </Box>
            </Grid>
            <Grid item xs={4}>
                {loading ?
                    <Skeleton variant="text" width={"70%"} height={"150"}/>
                    :
                    <Typography variant="h6" gutterBottom>
                        {data.tittle}
                    </Typography>
                }

                <br/>
                {loading ?
                    <Skeleton variant="rect" width={"20%"} height={"50"}/>
                    :
                    <Button size="small" className={classes.price} variant="contained"
                            disableElevation>{`${data.price} $`}</Button>
                }

                <br/>
                <Box
                    alignItems="center"
                    display="flex"
                    className={classes.margin}
                    component={Link}
                    to={loading ? "#" : `/profile/${data.owner._id}`}
                >
                    {loading ?
                        <Skeleton variant="circle" width={"100"} height={"100"}/>
                        :
                        <Avatar variant="rounded" className={classes.rounded}>
                            <img src={image} className={classes.imgAvatar} alt="avatar"/>
                        </Avatar>
                    }

                    <Box alignItems="left" flexDirection="column">
                        {loading ?
                            <>
                                <Skeleton variant={"text"} width={"150"}/>
                                <Skeleton variant={"text"} width={"100"}/>
                            </>
                            :
                            <>
                                <Typography variant="body1">
                                    {`${data.owner.profile.name} ${data.owner.profile.lastName}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {data.owner.emails[0].address}
                                </Typography>
                            </>
                        }

                    </Box>
                </Box>
                <br/>
                <Box alignItems="center" className={classes.margin}>
                    {loading?
                        <Skeleton variant="rect" width={"20%"} height={"50"}/>
                        :
                        <Button size="small" variant="contained" component={Link} to={`/category/${data.classification}`}>
                            {`${data.classification} $`}
                        </Button>
                    }
                    <Typography variant="h6">
                        Description
                    </Typography>
                </Box>
                {loading?
                    <>
                        <Skeleton variant={"text"} />
                        <Skeleton variant={"text"} />
                        <Skeleton variant={"text"} />
                        <Skeleton variant={"text"} width={"70%"}/>
                    </>
                    :
                    <Typography component="p" color="textSecondary">
                        {data.description}
                    </Typography>
                }
            </Grid>
        </Grid>

    )
        ;
}
