import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: 5,
    maxWidth: 240,
    height: 450,
    backgroundColor: "#A9A9A9",
    float:"left"
  },
  media: {
    height: 170,
    backgroundColor: "#D3D3D3"
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.item.front_default}
          title={props.item.display_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.display_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.flavor_text_entries}
          </Typography>
        </CardContent>
      <CardActions>
        <a href={"/details/"+props.item.id}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
