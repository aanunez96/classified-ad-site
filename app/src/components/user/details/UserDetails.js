import {Avatar, Box, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import useUserDetails from './useUserDetails';
import Skeleton from '@material-ui/lab/Skeleton';

const image = 'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$';

const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        height: 130,
        width: 130,
        marginRight: theme.spacing(4),
    },
    text:{
        marginTop: theme.spacing(0.7),
    }
}));

export default function Profile(props) {
    const classes = useStyles();
    const {userId} = props;
    const {loading,data} = useUserDetails(userId);

    return(
        <Box alignItems="top" display="flex">
            {loading ?
                <Skeleton variant="circle" className={classes.avatar} />
                :
                <Avatar className={classes.avatar} src={image}/>
            }
            <Box alignItems="left" display="flex" flexDirection="column" >
                {loading ?
                    <>
                        <Skeleton variant="rect" width={350} height={50} />
                        <Skeleton variant="text" width={"50%"} className={classes.text}/>
                        <Skeleton variant="text" width={"50%"} className={classes.text}/>
                    </>
                    :
                    <>
                        <Typography variant="h4" gutterBottom >
                            {`${data.profile.name} ${data.profile.lastName}`}
                        </Typography>
                        <Typography color="textSecondary" variant="body2" className={classes.text}>
                            {data.emails[0].address}
                        </Typography>
                        <Typography color="textSecondary" variant="body2" className={classes.text}>
                            {data.profile.number}
                        </Typography>
                    </>

                }

            </Box>
        </Box>
    );
}