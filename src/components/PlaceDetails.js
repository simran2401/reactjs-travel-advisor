import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
  Chip,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default function PlaceDetails({ place, placeRef, selected }) {
  if (selected) {
    placeRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const classes = useStyles();
  return (
    <Card elevation={8}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
        title={place.name}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {place.name}
        </Typography>
        <Box display='flex' justifyContent='space-between' my={2}>
          <Rating name='read-only' value={Number(place.rating)} readOnly />
          <Typography>
            {place.num_reviews} review{place.num_reviews > 1 && 's'}
          </Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant='body2'
            color='textSecondary'
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            variant='body2'
            color='textSecondary'
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {/* <Button
          size='small'
          color='primary'
          onClick={() => window.open(place.web_url, '_blank')}
        >
          Trip Advisor
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => window.open(place.website, '_blank')}
        >
          Website
        </Button> */}
        <Button
          size='small'
          color='primary'
          onClick={() => window.open(place.website, '_blank')}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
