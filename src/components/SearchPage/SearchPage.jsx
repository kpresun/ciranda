import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  button: {
    display: 'block',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

// SearchPage component includes the search criteria, search button, and imports the separate SearchItem component,
// which are iterated over when search results are returned.

function SearchPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  // TODO If you're not using this, remove the const
  const company = useSelector((store) => store.userSearch);

  // Local States
  const [materials, setMaterials] = React.useState({
    metalDrums: false,
    plasticDrums: false,
    plasticFilm: false,
    ibcs: false,
    cardboard: false,
  });

  // TODO move this const to it's own file
  // U.S. States for State Select Dropdown
  const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  const [selectedState, setSelectedState] = useState(states[0]);

  // handleChange on checkbox click
  const handleChange = (event) => {
    setMaterials({ ...materials, [event.target.name]: event.target.checked });
  };

  // Handle search for state and material results from the DB
  const handleSearch = () => {
    dispatch({ type: 'FETCH_COMPANIES', payload: materials, selectedState });
    history.push('/search-results');
  };

  return (
    <section>
      <Autocomplete
        id="states-combo-box"
        value={selectedState}
        options={states}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select your State" variant="outlined" />
        )}
        onChange={(event, newValue) => {
          setSelectedState(newValue);
        }}
      />
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Materials to Recycle</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={materials.metalDrums}
                onChange={handleChange}
                name="metalDrums"
              />
            }
            label="Metal Drums"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={materials.plasticDrums}
                onChange={handleChange}
                name="plasticDrums"
              />
            }
            label="Plastic Drums"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={materials.plasticFilm}
                onChange={handleChange}
                name="plasticFilm"
              />
            }
            label="Plastic Film"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={materials.ibcs}
                onChange={handleChange}
                name="ibcs"
              />
            }
            label="IBCs"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={materials.cardboard}
                onChange={handleChange}
                name="cardboard"
              />
            }
            label="Cardboard"
          />
        </FormGroup>
      </FormControl>
      {/* TODO Move button inside <FORM> if it's part of the form */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleSearch}
      >
        Search
      </Button>
    </section>
  );
}

export default SearchPage;
