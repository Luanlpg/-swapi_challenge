import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function MediaCard(props) {

  return (
    <Card className="card-root">
        <CardMedia
          className="card-media"
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
