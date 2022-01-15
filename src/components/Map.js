import React from "react";
import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
  paper: {
    width: 100,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
  },
  cardImage: {
    height: 85,
    width: 85,
    cursor: "pointer"
  }
}));

export default function Map({ places, coords, setBounds, setCoords, setChildClicked }) {
  const classes = useStyles();
  return (
    <Box className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(event) => {
          setCoords({ lat: event.center.lat, lng: event.center.lng });
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length > 0 &&
          places.map((place, index) => (
            <div lat={place.latitude} lng={place.longitude} key={index}>
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
              <Paper className={classes.paper}>
                <Typography>{place.name}</Typography>
                <img
                  className={classes.cardImage}
                  src={
                    (place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg")
                  }
                />
                <Rating readOnly size={"small"} value={Number(place.rating)}/>
              </Paper>
            </div>
          ))}
      </GoogleMapReact>
    </Box>
  );
}
