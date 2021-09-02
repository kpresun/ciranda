// React Imports
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

// MUI Imports
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

// MUI Setup for Checkboxes
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));

  
export default function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });
}

const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };

// SearchPage component includes the search criteria, search button, and imports the separate SearchItem component, 
// which are iterated over when search results are returned.

function SearchPage () {
    return (
        <section> 
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                    label="Gilad Gray"
                />
                <FormControlLabel
                    control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                    label="Jason Killian"
                />
                <FormControlLabel
                    control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                    label="Antoine Llorca"
                />
                </FormGroup>
            </FormControl>
        </section>
    )
}

export default SearchPage;