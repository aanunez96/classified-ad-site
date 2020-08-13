import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
    Info,
    InfoCaption,
    InfoSubtitle,
    InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Link} from "react-router-dom";


const useStyles = makeStyles(() => ({
    card: {
        borderRadius: '1rem',
        boxShadow: 'none',
        position: 'relative',
        minWidth: 200,
        minHeight: 360,
        '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '64%',
            bottom: 0,
            zIndex: 1,
            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
        },
    },
    content: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        width: '100%',
    },
}));

export const GalaxyCardDemo = React.memo(function GalaxyCard(props) {
    const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
    const styles = useStyles();
    const {data, owner} = props;
    return (
            <Card className={styles.card}>
                <CardMedia
                    classes={mediaStyles}
                    image={
                        'https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'
                    }
                />
                <Box py={3} px={2} className={styles.content}>
                    <Info useStyles={useGalaxyInfoStyles}>
                        <InfoSubtitle>{`${data.price} $`}</InfoSubtitle>
                        <InfoTitle>{data.tittle}</InfoTitle>
                        <InfoCaption>{`${data.description.substring(0, 20)} ...`}</InfoCaption>
                    </Info>
                    <Link to={(!owner)?`/ad/${data.classification}/${data._id}`:`/edit-ad/${data._id}`}>{(owner)? "Edit Ad" : "See Ad"}</Link>
                </Box>
            </Card>
    );
});
export default GalaxyCardDemo