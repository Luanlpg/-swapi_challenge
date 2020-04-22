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

export default function ItemGrid(props) {
  const classes = useStyles();
  console.log(props.item);
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
                  <spam className="attribute-title">Category</spam>
                  <spam className="attribute-value">{props.item.item_category}</spam>
                </li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>
                  <spam className="attribute-title">Cost</spam>
                  <spam className="attribute-value">{props.item.cost}</spam>
                </li>
              </ul>
            </div>
            <div className="left">
              <ul>
                <li>
                  <spam className="attribute-title">Effet</spam>
                  <spam className="attribute-value">{props.item.effet}</spam>
                </li>
              </ul>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
