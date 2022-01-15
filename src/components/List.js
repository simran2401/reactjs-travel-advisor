import React, {useState, useEffect, createRef} from "react";
import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import PlaceDetails from "./PlaceDetails";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 25,
  },
  formControl: {
    margin: 10,
    minWidth: 120,
    marginBottom: 30,
  },
  loading: {
    width: "100%",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
      height: "75vh",
      overflow: "auto"
  }
}));

export default function List({
  type,
  setType,
  isLoading,
  childClicked,
  places,
}) {
  const [elRefs, setElRefs] = useState([])
  const classes = useStyles();
  useEffect(() => {
    setElRefs((refs)=>{
       return Array(places.length).fill().map((_, index) => refs[index] ||  createRef()  )
    })
  }, [places])
  return (
    <div className={classes.container}>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type:</InputLabel>
            <Select
              id="placeType"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants"> Restaurants</MenuItem>
              <MenuItem value="hotels"> Hotels</MenuItem>
              <MenuItem value="attractions"> Attractions</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places && places.map((place, index) => {
                return (
                    <Grid ref={elRefs[index]} key={index}  item xs={12}>
                        <PlaceDetails selected={Number(childClicked) === index } placeRef={elRefs[index]} place={place} key={index}/>
                    </Grid>
                )
            })}
          </Grid>
        </div>
      )}
    </div>
  );
}
