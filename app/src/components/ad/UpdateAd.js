import {Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField} from "@material-ui/core";
import React, {useState} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles} from '@material-ui/core/styles';
import {gql, useMutation} from '@apollo/client';
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import Alert from "@material-ui/lab/Alert/Alert";

const categories = ['car', 'motorcycle', 'property', 'cycle', 'clothing', 'watch', 'gadget', 'mobile'];

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    alert: {
        margin: theme.spacing(1),
    }
}));


const UPDATE_AD = gql`
mutation updateAd(
  $adId: ID!
  $tittle: String
  $description: String
  $classification: Category
  $price: Int
){
  modifyAd(
    tittle: $tittle,
    adId: $adId,
    description: $description,
    price: $price,
    classification:$classification
    ){
    classification
    _id
  }
}
`;


const CREATE_AD = gql`
mutation createAd(
  $tittle: String!
  $description: String
  $price: Int!
  $owner : ID!
  $classification: Category!
){
createAd(
  tittle: $tittle,
  owner: $owner,
  description: $description,
  classification: $classification,
  price: $price
){
  _id
  classification
 }
}`;

export default function UpdateAd(props) {
    const classes = useStyles();
    const history = useHistory();
    const {ad, user} = props;
    const [updateAd, {data}] = useMutation((ad) ? UPDATE_AD : CREATE_AD);
    const [invalidAuth, setInvalidAuth] = useState(false);

    const validate = values => {
        const errors = {};

        if (!ad && !values.tittle) {
            errors.tittle = 'Required';
        } else if (values.tittle.length > 40) {
            errors.tittle = 'Must be 40 characters or less';
        }

        if (!ad && !values.description) {
            errors.description = 'Required';
        } else if (values.description.length > 255) {
            errors.description = 'Must be 255 characters or less';
        }
        if (!ad && !values.price) {
            errors.price = 'Required';
        }
        if (!ad && !values.classification) {
            errors.classification = 'Required';
        }

        return errors;
    };
    const modify = async ({tittle, description, price, classification}) => {
        let variables = {
            tittle,
            description,
            price,
            classification
        };
        variables = (ad)? {...variables, adId:ad._id}: {...variables, owner:user.id};
        try {
            await updateAd({variables})
        }catch (e) {
            setInvalidAuth(true);
        }
    };

    const formik = useFormik({
        initialValues: {
            tittle: (ad) ? ad.tittle : "",
            description: (ad) ? ad.description : "",
            price: (ad) ? ad.price : "",
            classification: (ad) ? ad.classification : "",
        },
        validate,
        onSubmit: async values => modify({
            tittle: values.tittle,
            description: values.description,
            price: values.price,
            classification: values.classification
        }),
    });

    (data?.modifyAd || data?.createAd) && history.push(`/ad/${(ad) ? data.modifyAd.classification : data.createAd.classification}/${(ad) ? data.modifyAd._id : data.createAd._id}`);


    return (
        <Grid
            item
            lg={8}
            md={6}
            xs={12}
        >
            {invalidAuth &&
            <Alert  severity="error">Something has gone wrong try again</Alert>
            }
            <form
                onSubmit={formik.handleSubmit}
            >
                <Card>
                    <CardHeader
                        subheader="The information can be edited"
                        title="Ad"
                    />
                    <Divider/>
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Tittle"
                                    name="tittle"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.tittle}
                                    required
                                    variant="outlined"
                                />
                                {formik.touched.tittle && formik.errors.tittle ? (
                                    <Alert className={classes.alert} severity="error">{formik.errors.tittle}</Alert>
                                ) : null}
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Price"
                                    name="price"
                                    type="number"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.price}
                                    required
                                    variant="outlined"
                                />
                                {formik.touched.price && formik.errors.price ? (
                                    <Alert className={classes.alert} severity="error">{formik.errors.price}</Alert>
                                ) : null}
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="select-outlined">Category</InputLabel>

                                    <Select
                                        labelId="select-outlined"
                                        name="classification"
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.classification}
                                        label="Category"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {categories.map(e =>
                                            <MenuItem key={e}
                                                      value={e}>{e.charAt(0).toUpperCase() + e.slice(1)}</MenuItem>
                                        )}

                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                {formik.touched.classification && formik.errors.classification ? (
                                    <Alert className={classes.alert}
                                           severity="error">{formik.errors.classification}</Alert>
                                ) : null}
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Description"
                                    name="description"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}
                                    multiline
                                    variant="outlined"
                                />
                                {formik.touched.description && formik.errors.description ? (
                                    <Alert className={classes.alert}
                                           severity="error">{formik.errors.description}</Alert>
                                ) : null}
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider/>
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        p={2}
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                        >
                            Save details
                        </Button>
                    </Box>
                </Card>
            </form>
        </Grid>
    );
}