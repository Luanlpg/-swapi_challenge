import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#D3D3D3",
    textAlign: 'center',
    color: "#3f51b5",
    height: 350,
    borderRadius: 16
  },
}));

export default function PokemonGrid(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>{props.item.display_name}</h1>
      <p>{props.item.flavor_text_entries}</p>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className="left">
              <ul>
                <li>
                  <spam className="attribute-title">Height</spam>
                  <spam className="attribute-value">{props.item.height}</spam>
                </li>
                <li>
                  <spam className="attribute-title">Weight</spam>
                  <spam className="attribute-value">{props.item.weight}lbs</spam>
                </li>
                <li>
                <spam className="attribute-title">Growth Rate</spam>
                <spam className="attribute-value">{props.item.growth_rate}</spam>
                </li>
                <li>
                  <spam className="attribute-title">Habitat</spam>
                  <spam className="attribute-value">{props.item.habitat}</spam>
                </li>
                <li>
                  <spam className="attribute-title">Generation</spam>
                  <spam className="attribute-value">{props.item.generation}</spam>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>
                <spam className="attribute-title">Capture Rate</spam>
                <spam className="attribute-value">{props.item.capture_rate}</spam>
                </li>
                <li>
                  <spam className="attribute-title">Base Experience</spam>
                  <spam className="attribute-value">{props.item.base_experience}</spam>
                </li>
                <li>
                  <spam className="attribute-title">Base Happiness</spam>
                  <spam className="attribute-value">{props.item.base_happiness}</spam>
                </li>
                <li>
                <spam className="attribute-title">Shape</spam>
                <spam className="attribute-value">{props.item.shape}</spam>
                </li>
                <li>
                  <spam className="attribute-title">Color</spam>
                  <spam className="attribute-value">{props.item.color}</spam>
                </li>
              </ul>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
