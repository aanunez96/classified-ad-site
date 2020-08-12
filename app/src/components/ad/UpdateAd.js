import {Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField} from "@material-ui/core";
import React, {useState} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function UpdateAd(props) {
    const classes = useStyles();
    const {ad} = props;
    const [values, setValues] = useState({
        tittle: (ad) ? ad : "",
        price: (ad) ? ad : "",
        category: (ad) ? ad : "",
        description: (ad) ? ad : "",
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Grid
            item
            lg={8}
            md={6}
            xs={12}
        >
            <form
                autoComplete="off"
                noValidate
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
                                    onChange={handleChange}
                                    required
                                    value={values.tittle}
                                    variant="outlined"
                                />
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
                                    onChange={handleChange}
                                    required
                                    value={values.price}
                                    variant="outlined"
                                />
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
                                        name="category"
                                        required
                                        value={values.category}
                                        onChange={handleChange}
                                        label="Category"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Description"
                                    name="description"
                                    onChange={handleChange}
                                    multiline
                                    value={values.description}
                                    variant="outlined"
                                />
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
                        >
                            Save details
                        </Button>
                    </Box>
                </Card>
            </form>
        </Grid>
    );
}