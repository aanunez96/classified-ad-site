import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import {Link} from "react-router-dom";

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
        height: "300",
    },
    img: {
        maxWidth: "400",
        maxHeight: "400",
        width: "100%",
        height: "100%",
        objectFit: "cover",
    }

}));


export default function AdDetail(props) {
    const classes = useStyles();
    const {data} = props;
    console.log(data);
    return (
        <Grid container spacing={3} className={classes.margin}>
            <Grid item xs={8} >
                <div height="200" display="flex" >
                <img src={image}  className={classes.img} alt="ad-image" />
                </div>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                    {data.tittle}
                </Typography>
                <br/>
                <Button size="small" className={classes.price} variant="contained" disableElevation >{`${data.price} $`}</Button>

                <br/>
                <Box
                    alignItems="center"
                    display="flex"
                    className={classes.margin}
                    component={Link} to={`/profile/${data.owner._id}`}
                >
                    <Avatar variant="rounded" className={classes.rounded} >
                        <img src={image}  className={classes.img} alt="ad-image" />
                    </Avatar>
                    <Box
                        alignItems="left"
                        flexDirection="column"
                    >
                    <Typography variant="body1" >
                        {`${data.owner.profile.name} ${data.owner.profile.lastName}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {data.owner.emails[0].address}
                    </Typography>
                    </Box>
                </Box>
                <br/>
                <Box
                    alignItems="center"
                    className={classes.margin}
                >
                    <Button size="small" variant="contained" component={Link} to={`/category/${data.classification}`}>
                        {`${data.classification} $`}
                    </Button>
                    <Typography variant="h6" >
                        Description
                    </Typography>
                </Box>
                <Typography component="p" color="textSecondary">
                    {data.description}
                </Typography>

            </Grid>
        </Grid>

)
    ;
}
