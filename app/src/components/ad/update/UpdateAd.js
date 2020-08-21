import {Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField} from "@material-ui/core";
import React, {useState} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import Alert from "@material-ui/lab/Alert/Alert";
import useUpdateAd from './useUpdateAd'
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";

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

export default function UpdateAd(props) {
    const classes = useStyles();
    const history = useHistory();
    const {adId} = props;
    const [loading, ad, modify, data] = useUpdateAd(adId);
    const [invalidAuth, setInvalidAuth] = useState(false);
    const [flagData, setFlagData] = useState((adId)? false: true);

    const validate = values => {
        const errors = {};

        if (!adId && !values.tittle) {
            errors.tittle = 'Required';
        } else if (values.tittle.length > 40) {
            errors.tittle = 'Must be 40 characters or less';
        }

        if (!adId && !values.description) {
            errors.description = 'Required';
        } else if (values.description.length > 255) {
            errors.description = 'Must be 255 characters or less';
        }
        if (!adId && !values.price) {
            errors.price = 'Required';
        }
        if (!adId && !values.classification) {
            errors.classification = 'Required';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            tittle: "",
            description: "",
            price: "",
            classification: "",
        },
        validate,
        onSubmit: async values => modify({
            tittle: values.tittle,
            description: values.description,
            price: values.price,
            classification: values.classification
        }, setInvalidAuth),
    });
    const updateField = (ad) => {
        formik.setFieldValue("tittle", ad.tittle);
        formik.setFieldValue("description", ad.description);
        formik.setFieldValue("price", ad.price);
        formik.setFieldValue("classification", ad.classification);
        setFlagData(true);
    };

    (!flagData && ad) && updateField(ad);

    (data) && history.push(`/ad/${data.classification}/${data._id}`);


    return (
        <Grid
            item
            lg={8}
            md={6}
            xs={12}
        >
            {loading &&
            <>
                <LinearProgress/>
                <br/>
            </>
            }
            {invalidAuth &&
            <Alert severity="error">Something has gone wrong try again</Alert>
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