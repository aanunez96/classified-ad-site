import {Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField} from "@material-ui/core";
import React, {useState} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles} from '@material-ui/core/styles';
import {gql, useMutation} from '@apollo/client';
import {useHistory} from "react-router-dom";

const categories = ['car', 'motorcycle', 'property', 'cycle', 'clothing', 'watch', 'gadget', 'mobile'];

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
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
    description
    classification
    price
    tittle
    _id
    date
  }
}
`;

export default function UpdateAd(props) {
    const classes = useStyles();
    const history = useHistory();
    const {ad} = props;
    const [tittle, setTittle] = useState((ad) ? ad.tittle : "");
    const [price, setPrice] = useState((ad) ? ad.price : "");
    const [classification, setClassification] = useState((ad) ? ad.classification : "");
    const [description, setDescription] = useState((ad) ? ad.description : "");
    const [updateAd, {data}] = useMutation(UPDATE_AD);
    data?.modifyAd && history.push(`/ad/${data.modifyAd.classification}/${data.modifyAd._id}`);

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
                                    onChange={e => setTittle(e.target.value)}
                                    required
                                    value={tittle}
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
                                    onChange={e => setPrice(e.target.value)}
                                    required
                                    value={price}
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
                                        value={classification}
                                        onChange={e => setClassification(e.target.value)}
                                        label="Category"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {categories.map(e =>
                                            <MenuItem value={e}>{e.charAt(0).toUpperCase() + e.slice(1)}</MenuItem>
                                        )}

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
                                    onChange={e => setDescription(e.target.value)}
                                    multiline
                                    value={description}
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
                            onClick={()=>updateAd({variables:{adId:ad._id,tittle,description,price,classification}})}
                        >
                            Save details
                        </Button>
                    </Box>
                </Card>
            </form>
        </Grid>
    );
}