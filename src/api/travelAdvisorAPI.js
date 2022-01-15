import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(
      "https://travel-advisor.p.rapidapi.com/"+type+"/list-in-boundary",
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_TRAVEL_API_KEY,
          },
      }
    );

    return response.data.data
  } catch (error) {
    console.log(error);
  }
};